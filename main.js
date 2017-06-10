// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
//formData[0].label // this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character
// Looping
// Sample of how to loop over the formData

  // Check your dev tools console for what the items in formData have
// -------- Your Code Goes Here --------
for (var i = 0; i < formData.length; i++) {
  let obj_fields = document.querySelector(".fields");
  let obj = formData[i];
  let text;
  if (obj.options.length === 0) {
    if(obj.type == 'textarea'){
      text = '<div class="cls_fields"><span class="fa '+ obj.icon +'"></span>';
      text = text + '<' + obj.type + '  id="' + obj.id + '" placeholder="' + obj.label +'"></'+ obj.type +'></div>';
    }
    else {
      text = '<div class="cls_fields"><span class="fa '+ obj.icon +'"></span>';
      text = text + '<input type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'"></div>';
    }
  }
  else {
      text = '<div class="cls_fields"><select><option>' + obj.label +'</option>';
      for (var j = 0; j < obj.options.length; j++){
      text = text + '<option value="' + obj.options[j].value +'">' + obj.options[j].label + '</option></div>';
  }
  }
  obj_fields.insertAdjacentHTML("beforeend", text);
}
