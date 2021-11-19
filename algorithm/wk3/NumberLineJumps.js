function kangaroo(x1, v1, x2, v2) {
    let count = 0;
    while (count < 10000) {
      if (x1 + count * v1 === x2 + count * v2) {
        return "YES";
      }
      count++;
    }
    return "NO";
  }

//console.log(kangaroo(3585, 7317, 6994, 9610));


