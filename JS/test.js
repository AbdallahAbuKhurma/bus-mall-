if(leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex){
  rendur();
}else if(firstSet === secondSet){
  rendur();
}else{
  leftImage.src = product.all[leftIndex].path;
  leftImage.alt = product.all[leftIndex].name;
  leftImage.title = product.all[leftIndex].name;
  product.all[leftIndex].views++;

  centerImage.src = product.all[centerIndex].path;
  centerImage.alt = product.all[centerIndex].name;
  centerImage.title = product.all[centerIndex].name;
  product.all[centerIndex].views++;

  rightImage.src = product.all[rightIndex].path;
  rightImage.alt = product.all[rightIndex].name;
  rightImage.title = product.all[rightIndex].name;
  product.all[rightIndex].views++;
}




if (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex) {
  rendur();
}
else 
{
leftImage.src = product.all[leftIndex].path;
leftImage.alt = product.all[leftIndex].name;
leftImage.title = product.all[leftIndex].name;
product.all[leftIndex].views++;

centerImage.src = product.all[centerIndex].path;
centerImage.alt = product.all[centerIndex].name;
centerImage.title = product.all[centerIndex].name;
product.all[centerIndex].views++;

rightImage.src = product.all[rightIndex].path;
rightImage.alt = product.all[rightIndex].name;
rightImage.title = product.all[rightIndex].name;
product.all[rightIndex].views++;
}