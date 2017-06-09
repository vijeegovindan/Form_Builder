str_innerHTML =
'<div class="cls_fname"><span class="fa fa-user"></span>' +
'<input type="text" id = "user-first-name" placeholder="First Name"></div>' +
'<div class="cls_lname"><span class="fa fa-user"></span>'+
'<input type="text" id = "user-last-name" placeholder="Last Name"></div>' +
'<div class="cls_email"><span class="fa fa-envelope"></span>'+
'<input type="email" id = "user-email" placeholder="Email Address"></div>' +
'<div class="cls_web"><span class="fa fa-globe"></span>'+
'<input type="text" id = "user-website" placeholder="Current website url"></div>' +
'<div class="cls_lang"><select id="user-language" placeholder="">' +
'<option value="">Select Language...</option>' +
'<option value="EN">English</option>' +
'<option value="FR">French</option>' +
'<option value="SP">Spanish</option>' +
'<option value="CH">Chinese</option>' +
'<option value="JP">Japanese</option>' +
'</select></div>' +
'<div class="cls_txtarea"><span class="fa fa-comments"></span>'+
'<textarea id="user-comment" placeholder="Your Comment"></textarea></div>' +
'<div class="cls_mobile"><span class="fa fa-mobile-phone"></span>'+
'<input type="tel" id = "user-mobile" placeholder="Mobil Number"></div>' +
'<div class="cls_phone"><span class="fa fa-phone"></span>'+
'<input type="tel" id = "user-phone" placeholder="Home Number"></div>';

var container  = document.querySelector('.frm_elements');
container.innerHTML = str_innerHTML;


/*var formData = [
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
*/
