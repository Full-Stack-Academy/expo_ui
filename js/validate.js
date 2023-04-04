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
    document.getElementById("innercontainer").innerHTML = "";
  }
  if (x.value == "exhibitor") {
    document.getElementById("innercontainer").innerHTML =
      "<input size='35%' style='width: 100%;border: 1px solid #ced4da;border-radius: 4px;margin-top:24px;margin-bottom:24px; padding: 9px 12px;' placeholder='Exhibitor Company Name *' type='text' id='compName' required><br><select name='booth' id='booth' style='margin-bottom:24px;width:100% ;border: 1px solid #ced4da;padding:0.37rem;border-radius: 4px'required><option selected disabled>Size of Stall - Entry Passes</option><option value='9sqmtr'>9 Square Meter - 3 Passes</option><option value='12sqmtr'>12 Square Meter - 10 Passes</option><option value='18sqmtr'>18 Square Meter - 15 Passes</option><option value='27sqmtr'>27 Square Meter - 20 Passes</option><option value='36sqmtr'>36 Square Meter - 30 Passes</option></select>";
  }
}
