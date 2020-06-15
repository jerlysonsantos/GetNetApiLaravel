<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Getnet\API\Getnet;
use Getnet\API\Transaction;
use Getnet\API\Environment;
use Getnet\API\Token;
use Getnet\API\Credit;
use Getnet\API\Customer;
use Getnet\API\Card;
use Getnet\API\Order;

class GetNetAPI extends Controller
{
  private $clientId;
  private $clientSecret;
  private $environment;
  private $getnet;
  private $transaction;
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */

  public function __construct() {
    $this->clientId = 'd5a920eb-ae71-469d-9df7-d10d5bb233db';
    $this->clientSecret = '034a4853-e9b4-4fc6-8e5c-25892f2dfffc';
    $this->enviroment = Environment::sandbox();

    $this->getnet = new Getnet($this->clientId, $this->clientSecret, $this->enviroment);
  }

  private function transBuild($sellerId, $currency, $amount) {
    try {
      $this->transaction = new Transaction();
      $this->transaction->setSellerId($sellerId);
      $this->transaction->setCurrency($currency);
      $this->transaction->setAmount($amount);

      return $this->transaction;
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }

  public function index()
  {
    return 'sou o index';
  }

  public function buyTest(Request $request) {
    try {

      $trans = $this->transBuild('7f5bcf40-b780-4ddb-a3df-ec29a762474a', $request->currency, $request->amount);

      $trans->order("123456")
      ->setProductType(Order::PRODUCT_TYPE_SERVICE)
      ->setSalesTax(0);

      $tokenCard = new Token("5155901222280001", "customer_210818263", $this->getnet);

      $trans->credit()
            ->setAuthenticated(false)
            ->setDynamicMcc("1799")
            ->setSoftDescriptor("LOJA*TESTE*COMPRA-123")
            ->setDelayed(false)
            ->setPreAuthorization(false)
            ->setNumberInstallments(2)
            ->setSaveCardData(false)
            ->setTransactionType(Credit::TRANSACTION_TYPE_INSTALL_NO_INTEREST)
            ->card($tokenCard)
                ->setBrand(Card::BRAND_MASTERCARD)
                ->setExpirationMonth("12")
                ->setExpirationYear("20")
                ->setCardholderName("Jax Teller")
                ->setSecurityCode("123");

      $trans->customer("customer_210818263")
            ->setDocumentType(Customer::DOCUMENT_TYPE_CPF)
            ->setEmail("customer@email.com.br")
            ->setFirstName("Jax")
            ->setLastName("Teller")
            ->setName("Jax Teller")
            ->setPhoneNumber("5551999887766")
            ->setDocumentNumber("12345678912")
            ->billingAddress()
                ->setCity("São Paulo")
                ->setComplement("Sons of Anarchy")
                ->setCountry("Brasil")
                ->setDistrict("Centro")
                ->setNumber("1000")
                ->setPostalCode("90230060")
                ->setState("SP")
                ->setStreet("Av. Brasil");

      $trans->shipping()
            ->setFirstName("Jax")
            ->setEmail("customer@email.com.br")
            ->setName("Jax Teller")
            ->setPhoneNumber("5551999887766")
            ->setShippingAmount(0)
            ->address()
                ->setCity("Porto Alegre")
                ->setComplement("Sons of Anarchy")
                ->setCountry("Brasil")
                ->setDistrict("São Geraldo")
                ->setNumber("1000")
                ->setPostalCode("90230060")
                ->setState("RS")
                ->setStreet("Av. Brasil");

      $response = $this->getnet->authorize($trans);

      return $response->getStatus();
    } catch (\Exception $e) {
      Log::error($e);
      return 'Deu erro';
    }
  }

}
