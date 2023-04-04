function change(x) {
  x.style.color = "#1a88b2";
  x.style.backgroundColor = "white";
}

function revert(x) {
  x.style.color = "white";
  x.style.backgroundColor = "#1a88b2";
}

function checkuser(x) {
  if (!(x.value == "exhibitor")) {
    document.getElementById('innercontainer').innerHTML = "";
  }
  if (x.value == "exhibitor") {
    document.getElementById('innercontainer').innerHTML = "<input size='35%' style='width: 100%;border: 1px solid gray;border-radius: 4px;margin-top:3%; padding: 9px 12px;' placeholder='Exhibitor Company Name *' type='text' id='txtName' required><br><select name='booth' id='booth' style='margin-top:10px;padding:5px;width:100%' required><option selected disabled>Size of Booth</option><option value='9sqmtr'>9 Square Meter</option><option value='12sqmtr'>12 Sqare Meter</option><option value='18sqmtr'>18 Square Meter</option><option value='27sqmtr'>27 Square Meter</option><option value='36sqmtr'>36 Square Meter</option></select><br><textarea id='message' style='margin-top:3%;' name='message' placeholder='Message regarding Exhibitor' rows='4' cols='40' required></textarea>";
  }
}