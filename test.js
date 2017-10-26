let rtrib = (num) => {
    if (num <= 2) {
      return 0;
    } else if (num === 3) {
      return 1;
    }
    return rtrib(num - 1) + rtrib(num - 2);
}
  
  console.log(rtrib(4));