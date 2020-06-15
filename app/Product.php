<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $fillable = ['name', 'description', 'amount', 'type'];
  protected $guarded = ['id'];
  protected $table = 'products';
}
