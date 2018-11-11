var n="", string="TÔI LÀ MỘT TÊN NGỐC!!";

function typeTextarea(){
  t = document.form.textarea.value;
  j = t.length;
  if (j > 0)
  {
    for(var i=0; i<j; i++)
    {
      n = n + string[i];

      // Khi gõ hết chuỗi tự động reset
      if(i == 21)
      {
        document.form.textarea.value = "";
        n = "";
      }
    }
  }
  document.form.textarea.value = n;
  n="";
  setTimeout("typeTextarea()", 1);
}

document.form.textarea.addEventListener('keydown', typeTextarea);