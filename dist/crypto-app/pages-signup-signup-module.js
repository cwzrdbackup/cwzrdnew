(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./src/app/models/CountryList/country-list.ts":
/*!****************************************************!*\
  !*** ./src/app/models/CountryList/country-list.ts ***!
  \****************************************************/
/*! exports provided: countryList, Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var CountryList = /** @class */ (function () {
    function CountryList() {
    }
    CountryList.countries = [
        { name: 'United Kingdom', dialCode: '+44', code: 'GB' },
        { name: 'United States', dialCode: '+1', code: 'US' },
        { name: 'Afghanistan', dialCode: '+93', code: 'AF' },
        { name: 'Albania', dialCode: '+355', code: 'AL' },
        { name: 'Algeria', dialCode: '+213', code: 'DZ' },
        { name: 'AmericanSamoa', dialCode: '+1 684', code: 'AS' },
        { name: 'Andorra', dialCode: '+376', code: 'AD' },
        { name: 'Angola', dialCode: '+244', code: 'AO' },
        { name: 'Anguilla', dialCode: '+1 264', code: 'AI' },
        { name: 'Antigua and Barbuda', dialCode: '+1268', code: 'AG' },
        { name: 'Argentina', dialCode: '+54', code: 'AR' },
        { name: 'Armenia', dialCode: '+374', code: 'AM' },
        { name: 'Aruba', dialCode: '+297', code: 'AW' },
        { name: 'Australia', dialCode: '+61', code: 'AU' },
        { name: 'Austria', dialCode: '+43', code: 'AT' },
        { name: 'Azerbaijan', dialCode: '+994', code: 'AZ' },
        { name: 'Bahamas', dialCode: '+1 242', code: 'BS' },
        { name: 'Bahrain', dialCode: '+973', code: 'BH' },
        { name: 'Bangladesh', dialCode: '+880', code: 'BD' },
        { name: 'Barbados', dialCode: '+1 246', code: 'BB' },
        { name: 'Belarus', dialCode: '+375', code: 'BY' },
        { name: 'Belgium', dialCode: '+32', code: 'BE' },
        { name: 'Belize', dialCode: '+501', code: 'BZ' },
        { name: 'Benin', dialCode: '+229', code: 'BJ' },
        { name: 'Bermuda', dialCode: '+1 441', code: 'BM' },
        { name: 'Bhutan', dialCode: '+975', code: 'BT' },
        { name: 'Bolivia, Plurinational State of', dialCode: '+591', code: 'BO' },
        { name: 'Bosnia and Herzegovina', dialCode: '+387', code: 'BA' },
        { name: 'Botswana', dialCode: '+267', code: 'BW' },
        { name: 'Brazil', dialCode: '+55', code: 'BR' },
        { name: 'British Indian Ocean Territory', dialCode: '+246', code: 'IO' },
        { name: 'Brunei Darussalam', dialCode: '+673', code: 'BN' },
        { name: 'Bulgaria', dialCode: '+359', code: 'BG' },
        { name: 'Burkina Faso', dialCode: '+226', code: 'BF' },
        { name: 'Burundi', dialCode: '+257', code: 'BI' },
        { name: 'Cambodia', dialCode: '+855', code: 'KH' },
        { name: 'Cameroon', dialCode: '+237', code: 'CM' },
        { name: 'Canada', dialCode: '+1', code: 'CA' },
        { name: 'Cape Verde', dialCode: '+238', code: 'CV' },
        { name: 'Cayman Islands', dialCode: '+ 345', code: 'KY' },
        { name: 'Central African Republic', dialCode: '+236', code: 'CF' },
        { name: 'Chad', dialCode: '+235', code: 'TD' },
        { name: 'Chile', dialCode: '+56', code: 'CL' },
        { name: 'China', dialCode: '+86', code: 'CN' },
        { name: 'Christmas Island', dialCode: '+61', code: 'CX' },
        { name: 'Cocos (Keeling) Islands', dialCode: '+61', code: 'CC' },
        { name: 'Colombia', dialCode: '+57', code: 'CO' },
        { name: 'Comoros', dialCode: '+269', code: 'KM' },
        { name: 'Congo', dialCode: '+242', code: 'CG' },
        { name: 'Congo, The Democratic Republic of the', dialCode: '+243', code: 'CD' },
        { name: 'Cook Islands', dialCode: '+682', code: 'CK' },
        { name: 'Costa Rica', dialCode: '+506', code: 'CR' },
        { name: 'Cote d\'Ivoire', dialCode: '+225', code: 'CI' },
        { name: 'Croatia', dialCode: '+385', code: 'HR' },
        { name: 'Cuba', dialCode: '+53', code: 'CU' },
        { name: 'Cyprus', dialCode: '+537', code: 'CY' },
        { name: 'Czech Republic', dialCode: '+420', code: 'CZ' },
        { name: 'Denmark', dialCode: '+45', code: 'DK' },
        { name: 'Djibouti', dialCode: '+253', code: 'DJ' },
        { name: 'Dominica', dialCode: '+1 767', code: 'DM' },
        { name: 'Dominican Republic', dialCode: '+1 849', code: 'DO' },
        { name: 'Ecuador', dialCode: '+593', code: 'EC' },
        { name: 'Egypt', dialCode: '+20', code: 'EG' },
        { name: 'El Salvador', dialCode: '+503', code: 'SV' },
        { name: 'Equatorial Guinea', dialCode: '+240', code: 'GQ' },
        { name: 'Eritrea', dialCode: '+291', code: 'ER' },
        { name: 'Estonia', dialCode: '+372', code: 'EE' },
        { name: 'Ethiopia', dialCode: '+251', code: 'ET' },
        { name: 'Falkland Islands (Malvinas)', dialCode: '+500', code: 'FK' },
        { name: 'Faroe Islands', dialCode: '+298', code: 'FO' },
        { name: 'Fiji', dialCode: '+679', code: 'FJ' },
        { name: 'Finland', dialCode: '+358', code: 'FI' },
        { name: 'France', dialCode: '+33', code: 'FR' },
        { name: 'French Guiana', dialCode: '+594', code: 'GF' },
        { name: 'French Polynesia', dialCode: '+689', code: 'PF' },
        { name: 'Gabon', dialCode: '+241', code: 'GA' },
        { name: 'Gambia', dialCode: '+220', code: 'GM' },
        { name: 'Georgia', dialCode: '+995', code: 'GE' },
        { name: 'Germany', dialCode: '+49', code: 'DE' },
        { name: 'Ghana', dialCode: '+233', code: 'GH' },
        { name: 'Gibraltar', dialCode: '+350', code: 'GI' },
        { name: 'Greece', dialCode: '+30', code: 'GR' },
        { name: 'Greenland', dialCode: '+299', code: 'GL' },
        { name: 'Grenada', dialCode: '+1 473', code: 'GD' },
        { name: 'Guadeloupe', dialCode: '+590', code: 'GP' },
        { name: 'Guam', dialCode: '+1 671', code: 'GU' },
        { name: 'Guatemala', dialCode: '+502', code: 'GT' },
        { name: 'Guernsey', dialCode: '+44', code: 'GG' },
        { name: 'Guinea', dialCode: '+224', code: 'GN' },
        { name: 'Guinea-Bissau', dialCode: '+245', code: 'GW' },
        { name: 'Guyana', dialCode: '+595', code: 'GY' },
        { name: 'Haiti', dialCode: '+509', code: 'HT' },
        { name: 'Holy See (Vatican City State)', dialCode: '+379', code: 'VA' },
        { name: 'Honduras', dialCode: '+504', code: 'HN' },
        { name: 'Hong Kong', dialCode: '+852', code: 'HK' },
        { name: 'Hungary', dialCode: '+36', code: 'HU' },
        { name: 'Iceland', dialCode: '+354', code: 'IS' },
        { name: 'India', dialCode: '+91', code: 'IN' },
        { name: 'Indonesia', dialCode: '+62', code: 'ID' },
        { name: 'Iran, Islamic Republic of', dialCode: '+98', code: 'IR' },
        { name: 'Iraq', dialCode: '+964', code: 'IQ' },
        { name: 'Ireland', dialCode: '+353', code: 'IE' },
        { name: 'Isle of Man', dialCode: '+44', code: 'IM' },
        { name: 'Israel', dialCode: '+972', code: 'IL' },
        { name: 'Italy', dialCode: '+39', code: 'IT' },
        { name: 'Jamaica', dialCode: '+1 876', code: 'JM' },
        { name: 'Japan', dialCode: '+81', code: 'JP' },
        { name: 'Jersey', dialCode: '+44', code: 'JE' },
        { name: 'Jordan', dialCode: '+962', code: 'JO' },
        { name: 'Kazakhstan', dialCode: '+7 7', code: 'KZ' },
        { name: 'Kenya', dialCode: '+254', code: 'KE' },
        { name: 'Kiribati', dialCode: '+686', code: 'KI' },
        { name: 'Korea, Democratic People\'s Republic of', dialCode: '+850', code: 'KP' },
        { name: 'Korea, Republic of', dialCode: '+82', code: 'KR' },
        { name: 'Kuwait', dialCode: '+965', code: 'KW' },
        { name: 'Kyrgyzstan', dialCode: '+996', code: 'KG' },
        { name: 'Lao People\'s Democratic Republic', dialCode: '+856', code: 'LA' },
        { name: 'Latvia', dialCode: '+371', code: 'LV' },
        { name: 'Lebanon', dialCode: '+961', code: 'LB' },
        { name: 'Lesotho', dialCode: '+266', code: 'LS' },
        { name: 'Liberia', dialCode: '+231', code: 'LR' },
        { name: 'Libyan Arab Jamahiriya', dialCode: '+218', code: 'LY' },
        { name: 'Liechtenstein', dialCode: '+423', code: 'LI' },
        { name: 'Lithuania', dialCode: '+370', code: 'LT' },
        { name: 'Luxembourg', dialCode: '+352', code: 'LU' },
        { name: 'Macao', dialCode: '+853', code: 'MO' },
        { name: 'Macedonia, The Former Yugoslav Republic of', dialCode: '+389', code: 'MK' },
        { name: 'Madagascar', dialCode: '+261', code: 'MG' },
        { name: 'Malawi', dialCode: '+265', code: 'MW' },
        { name: 'Malaysia', dialCode: '+60', code: 'MY' },
        { name: 'Maldives', dialCode: '+960', code: 'MV' },
        { name: 'Mali', dialCode: '+223', code: 'ML' },
        { name: 'Malta', dialCode: '+356', code: 'MT' },
        { name: 'Marshall Islands', dialCode: '+692', code: 'MH' },
        { name: 'Martinique', dialCode: '+596', code: 'MQ' },
        { name: 'Mauritania', dialCode: '+222', code: 'MR' },
        { name: 'Mauritius', dialCode: '+230', code: 'MU' },
        { name: 'Mayotte', dialCode: '+262', code: 'YT' },
        { name: 'Mexico', dialCode: '+52', code: 'MX' },
        { name: 'Micronesia, Federated States of', dialCode: '+691', code: 'FM' },
        { name: 'Moldova, Republic of', dialCode: '+373', code: 'MD' },
        { name: 'Monaco', dialCode: '+377', code: 'MC' },
        { name: 'Mongolia', dialCode: '+976', code: 'MN' },
        { name: 'Montenegro', dialCode: '+382', code: 'ME' },
        { name: 'Montserrat', dialCode: '+1664', code: 'MS' },
        { name: 'Morocco', dialCode: '+212', code: 'MA' },
        { name: 'Mozambique', dialCode: '+258', code: 'MZ' },
        { name: 'Myanmar', dialCode: '+95', code: 'MM' },
        { name: 'Namibia', dialCode: '+264', code: 'NA' },
        { name: 'Nauru', dialCode: '+674', code: 'NR' },
        { name: 'Nepal', dialCode: '+977', code: 'NP' },
        { name: 'Netherlands', dialCode: '+31', code: 'NL' },
        { name: 'Netherlands Antilles', dialCode: '+599', code: 'AN' },
        { name: 'New Caledonia', dialCode: '+687', code: 'NC' },
        { name: 'New Zealand', dialCode: '+64', code: 'NZ' },
        { name: 'Nicaragua', dialCode: '+505', code: 'NI' },
        { name: 'Niger', dialCode: '+227', code: 'NE' },
        { name: 'Nigeria', dialCode: '+234', code: 'NG' },
        { name: 'Niue', dialCode: '+683', code: 'NU' },
        { name: 'Norfolk Island', dialCode: '+672', code: 'NF' },
        { name: 'Northern Mariana Islands', dialCode: '+1 670', code: 'MP' },
        { name: 'Norway', dialCode: '+47', code: 'NO' },
        { name: 'Oman', dialCode: '+968', code: 'OM' },
        { name: 'Pakistan', dialCode: '+92', code: 'PK' },
        { name: 'Palau', dialCode: '+680', code: 'PW' },
        { name: 'Palestinian Territory, Occupied', dialCode: '+970', code: 'PS' },
        { name: 'Panama', dialCode: '+507', code: 'PA' },
        { name: 'Papua New Guinea', dialCode: '+675', code: 'PG' },
        { name: 'Paraguay', dialCode: '+595', code: 'PY' },
        { name: 'Peru', dialCode: '+51', code: 'PE' },
        { name: 'Philippines', dialCode: '+63', code: 'PH' },
        { name: 'Pitcairn', dialCode: '+872', code: 'PN' },
        { name: 'Poland', dialCode: '+48', code: 'PL' },
        { name: 'Portugal', dialCode: '+351', code: 'PT' },
        { name: 'Puerto Rico', dialCode: '+1 939', code: 'PR' },
        { name: 'Qatar', dialCode: '+974', code: 'QA' },
        { name: 'Romania', dialCode: '+40', code: 'RO' },
        { name: 'Russia', dialCode: '+7', code: 'RU' },
        { name: 'Rwanda', dialCode: '+250', code: 'RW' },
        { name: 'Réunion', dialCode: '+262', code: 'RE' },
        { name: 'Saint Barthélemy', dialCode: '+590', code: 'BL' },
        { name: 'Saint Helena, Ascension and Tristan Da Cunha', dialCode: '+290', code: 'SH' },
        { name: 'Saint Kitts and Nevis', dialCode: '+1 869', code: 'KN' },
        { name: 'Saint Lucia', dialCode: '+1 758', code: 'LC' },
        { name: 'Saint Martin', dialCode: '+590', code: 'MF' },
        { name: 'Saint Pierre and Miquelon', dialCode: '+508', code: 'PM' },
        { name: 'Saint Vincent and the Grenadines', dialCode: '+1 784', code: 'VC' },
        { name: 'Samoa', dialCode: '+685', code: 'WS' },
        { name: 'San Marino', dialCode: '+378', code: 'SM' },
        { name: 'Sao Tome and Principe', dialCode: '+239', code: 'ST' },
        { name: 'Saudi Arabia', dialCode: '+966', code: 'SA' },
        { name: 'Senegal', dialCode: '+221', code: 'SN' },
        { name: 'Serbia', dialCode: '+381', code: 'RS' },
        { name: 'Seychelles', dialCode: '+248', code: 'SC' },
        { name: 'Sierra Leone', dialCode: '+232', code: 'SL' },
        { name: 'Singapore', dialCode: '+65', code: 'SG' },
        { name: 'Slovakia', dialCode: '+421', code: 'SK' },
        { name: 'Slovenia', dialCode: '+386', code: 'SI' },
        { name: 'Solomon Islands', dialCode: '+677', code: 'SB' },
        { name: 'Somalia', dialCode: '+252', code: 'SO' },
        { name: 'South Africa', dialCode: '+27', code: 'ZA' },
        { name: 'South Georgia and the South Sandwich Islands', dialCode: '+500', code: 'GS' },
        { name: 'Spain', dialCode: '+34', code: 'ES' },
        { name: 'Sri Lanka', dialCode: '+94', code: 'LK' },
        { name: 'Sudan', dialCode: '+249', code: 'SD' },
        { name: 'Suriname', dialCode: '+597', code: 'SR' },
        { name: 'Svalbard and Jan Mayen', dialCode: '+47', code: 'SJ' },
        { name: 'Swaziland', dialCode: '+268', code: 'SZ' },
        { name: 'Sweden', dialCode: '+46', code: 'SE' },
        { name: 'Switzerland', dialCode: '+41', code: 'CH' },
        { name: 'Syrian Arab Republic', dialCode: '+963', code: 'SY' },
        { name: 'Taiwan, Province of China', dialCode: '+886', code: 'TW' },
        { name: 'Tajikistan', dialCode: '+992', code: 'TJ' },
        { name: 'Tanzania, United Republic of', dialCode: '+255', code: 'TZ' },
        { name: 'Thailand', dialCode: '+66', code: 'TH' },
        { name: 'Timor-Leste', dialCode: '+670', code: 'TL' },
        { name: 'Togo', dialCode: '+228', code: 'TG' },
        { name: 'Tokelau', dialCode: '+690', code: 'TK' },
        { name: 'Tonga', dialCode: '+676', code: 'TO' },
        { name: 'Trinidad and Tobago', dialCode: '+1 868', code: 'TT' },
        { name: 'Tunisia', dialCode: '+216', code: 'TN' },
        { name: 'Turkey', dialCode: '+90', code: 'TR' },
        { name: 'Turkmenistan', dialCode: '+993', code: 'TM' },
        { name: 'Turks and Caicos Islands', dialCode: '+1 649', code: 'TC' },
        { name: 'Tuvalu', dialCode: '+688', code: 'TV' },
        { name: 'Uganda', dialCode: '+256', code: 'UG' },
        { name: 'Ukraine', dialCode: '+380', code: 'UA' },
        { name: 'United Arab Emirates', dialCode: '+971', code: 'AE' },
        { name: 'Uruguay', dialCode: '+598', code: 'UY' },
        { name: 'Uzbekistan', dialCode: '+998', code: 'UZ' },
        { name: 'Vanuatu', dialCode: '+678', code: 'VU' },
        { name: 'Venezuela, Bolivarian Republic of', dialCode: '+58', code: 'VE' },
        { name: 'Viet Nam', dialCode: '+84', code: 'VN' },
        { name: 'Virgin Islands, British', dialCode: '+1 284', code: 'VG' },
        { name: 'Virgin Islands, U.S.', dialCode: '+1 340', code: 'VI' },
        { name: 'Wallis and Futuna', dialCode: '+681', code: 'WF' },
        { name: 'Yemen', dialCode: '+967', code: 'YE' },
        { name: 'Zambia', dialCode: '+260', code: 'ZM' },
        { name: 'Zimbabwe', dialCode: '+263', code: 'ZW' },
    ];
    return CountryList;
}());
var countryList = CountryList.countries;
var Country = /** @class */ (function () {
    function Country(countryObj) {
        this.name = countryObj.name;
        this.dialCode = countryObj.dialCode;
        this.code = countryObj.code;
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card style=\"max-height: 75vh;max-width: 75vw;\">\n  <nb-card-header class=\"text-center\">\n    Choose profile image\n  </nb-card-header>\n  <nb-card-body class=\"d-flex flex-wrap\">\n    <div *ngFor=\"let img of images\" class=\"col-12 col-md-6 col-lg-4 avatar-spacer\">\n      <div class=\"mb-3 profile-image\" [ngStyle]=\"{'background-image': 'url(' + img + ')'}\"\n        [ngClass]=\"{'selected': selected === img}\" (click)=\"selected = img\">\n        \t\n\n\t\t\t\n        </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n\n<div class=\"text-center\">\n  <button nbButton status=\"success\" (click)=\"apply()\">Apply</button>\n</div>"

/***/ }),

/***/ "./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin: auto;\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: 3px solid white; }\n\n.profile-image:active {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.selected {\n  opacity: 0.7;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.avatar-spacer {\n  margin-bottom: 30px; }\n\n.avatar-spacer:last-child {\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLWNob29zZS1wcm9maWxlLWltZy9zaWdudXAtY2hvb3NlLXByb2ZpbGUtaW1nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDRCQUEyQjtFQUMzQix1QkFBc0I7RUFDdEIsNkJBQW9CO0VBQXBCLHFCQUFvQjtFQUNwQixnQkFBZTtFQUNmLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWiw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLDhCQUFxQjtVQUFyQixzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDQyxvQkFBbUIsRUFDbkI7O0FBQ0Q7RUFDQyxpQkFBZ0IsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLWNob29zZS1wcm9maWxlLWltZy9zaWdudXAtY2hvb3NlLXByb2ZpbGUtaW1nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xufVxuXG4ucHJvZmlsZS1pbWFnZTphY3RpdmUge1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG59XG4uYXZhdGFyLXNwYWNlciB7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uYXZhdGFyLXNwYWNlcjpsYXN0LWNoaWxkIHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SignupChooseProfileImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupChooseProfileImgComponent", function() { return SignupChooseProfileImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");



var SignupChooseProfileImgComponent = /** @class */ (function () {
    function SignupChooseProfileImgComponent(ref) {
        this.ref = ref;
        this.images = [
            "/assets/Avatars/4.png",
            "/assets/Avatars/8.png",
            "/assets/Avatars/15.png",
            "/assets/Avatars/16.png",
        ];
        this.selected = "";
    }
    SignupChooseProfileImgComponent.prototype.ngOnInit = function () {
    };
    SignupChooseProfileImgComponent.prototype.apply = function () {
        this.ref.close(this.selected);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupChooseProfileImgComponent.prototype, "selected", void 0);
    SignupChooseProfileImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-choose-profile-img',
            template: __webpack_require__(/*! ./signup-choose-profile-img.component.html */ "./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.html"),
            styles: [__webpack_require__(/*! ./signup-choose-profile-img.component.scss */ "./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogRef"]])
    ], SignupChooseProfileImgComponent);
    return SignupChooseProfileImgComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout class=\"layout-container\">\n    <nb-layout-column class=\"flex flexCenter p-0\">\n       \n                            \n\n\n    <nb-card class=\"wholeScreen\">\n      <nb-card-body class=\"flex-vertical p-0\">\n\t  <div class=\"login-left\">\n\t  <div class=\"login-left-inner\">\n\t  <img class=\"login-logo\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/CryptoWzrd_black.png?5771\"/>\n        <div class=\"login-header\">SIGNUP NOW</div>    \n        <div *ngIf=\"errorMessage\" style=\"color:red;\">\n          {{errorMessage}}\n        </div>\n    <div style=\"font-size:20;color:green;\" *ngIf=\"success\">\n      Your account has been created successfully. Please navigate to the <a href=\"/login\">login</a> page.\n    </div>\n    \n\t\t<div class=\"enterUsername\" *ngIf=\"!success\">  \n        \n        <form [nbSpinner]=\"sending\" (ngSubmit)=\"signup()\" [formGroup]=\"signupForm\" class=\"loginForm\">\n          <div class=\"mb-0\">\n      <div class=\"login-subheader\">Please provide valid info to signup to the platform.</div>\n          <div id=\"profile-image\" class=\"mb-3\" [ngStyle]=\"{'background-image': 'url('+ profileImg +')'}\">\n            <div id=\"edit-profile-image\" class=\"align-items-center justify-content-center\" (click)=\"chooseProfileImg()\">\n              <i class=\"nb-edit\" size=\"large\"></i>\n            </div>\n        </div>\n            <input type=\"email\" name=\"email\" placeholder=\"Enter your email...\" nbInput required formControlName=\"email\" class=\"formWidth loginInput\"\n            autocomplete=\"new-password\"\n            >\n            \n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.email.touched && signupForm.controls.email.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.email)}}</span>\n            </p>\n          </div>\n          \n          <div class=\"my-0\">\n            <input type=\"text\" name=\"firstName\" placeholder=\"First Name...\" nbInput required\n              formControlName=\"firstName\" class=\"formWidth loginInput\">\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.firstName.touched && signupForm.controls.firstName.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.firstName)}}</span>\n            </p>\n          </div>\n          <div class=\"my-0\">\n            <input type=\"text\" name=\"lastName\" placeholder=\"Last Name...\" nbInput required\n              formControlName=\"lastName\" class=\"formWidth loginInput\">\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.lastName.touched && signupForm.controls.lastName.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.lastName)}}</span>\n            </p>\n          </div>\n          <div class=\"my-0\">\n            <input type=\"text\" name=\"username\" placeholder=\"Choose a Battle of WZRDs ID...\" nbInput required\n              formControlName=\"username\" class=\"formWidth loginInput\"\n              autocomplete=\"new-password\"\n              >\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.password.touched && signupForm.controls.password.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.password)}}</span>\n            </p>\n          </div>\n\n          <div class=\"my-0\">\n            <input type=\"password\" name=\"password\" placeholder=\"Enter your password...\" nbInput required\n              formControlName=\"password\" class=\"formWidth loginInput\"\n              autocomplete=\"new-password\"\n              >\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.password.touched && signupForm.controls.password.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.password)}}</span>\n            </p>\n          </div>\n          <div class=\"my-0\">\n            <input type=\"password\" name=\"confirmpassword\" placeholder=\"Confirm password...\" nbInput required\n              formControlName=\"confirmpassword\" class=\"formWidth loginInput\">\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.confirmpassword.touched && signupForm.controls.confirmpassword.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.confirmpassword)}}</span>\n            </p>\n          </div>          \n          <div class=\"my-0\">\n            <input type=\"date\" name=\"birthDay\" placeholder=\"Birthday mm/dd/yyyy\" nbInput required\n              formControlName=\"birthDay\" class=\"formWidth loginInput\">\n              <!-- <nb-datepicker format=\"dd/MM/yyyy\" #datepicker></nb-datepicker> -->\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.birthDay.touched && signupForm.controls.birthDay.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.birthDay)}}</span>\n            </p>\n          </div>\n          <div class=\"my-0 customSelect\">\n            <nb-select  name=\"country\" placeholder=\"Country\" required \n              formControlName=\"country\" >\n            <nb-option *ngFor=\"let c of countries\" [value]=\"c\">{{c.name}}</nb-option>\n            </nb-select>\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.country.touched && signupForm.controls.country.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.country)}}</span>\n            </p>\n          </div>\n          <div class=\"my-0\">\n            <input type=\"text\" name=\"licenseKey\" placeholder=\"WZRD Activation Key...\" nbInput required\n              formControlName=\"licenseKey\" class=\"formWidth loginInput\">\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.licenseKey.touched && signupForm.controls.licenseKey.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.licenseKey)}}</span>\n            </p>\n          </div>\n          <div class=\"my-0 customSelect\" style=\"margin-bottom: 15px !important\">\n            <nb-select  name=\"gender\" placeholder=\"Gender\" required\n              formControlName=\"gender\" >\n              <nb-option [value]=\"'male'\">Male</nb-option>\n              <nb-option [value]=\"'female'\">Female</nb-option>\n            </nb-select>\n            <p class=\"error\">&nbsp;\n              <span *ngIf=\"signupForm.controls.gender.touched && signupForm.controls.gender.invalid\" class=\"errorMessage\">{{showError(signupForm.controls.gender)}}</span>\n            </p>\n          </div>\n          <!-- <div class=\"my-0\" style=\"margin-bottom:  15px !important\">\n              <nb-checkbox checkbox-checked-bg [value]=\"termsAndConditionChecked\"  (change)=\"toggle($event)\"><a href=\"https://www.google.com\" target=\"_blank\"> Terms And Conditions</a></nb-checkbox>\n            </div> -->\n<!--             \n            <p class=\"error\">&nbsp;\n                <span class=\"purple-font\" data-toggle=\"modal\" data-target=\"#privacyPolicyModal\" (click)=\"showPrivacyPolicy()\" id=\"PrivacyPolicy\"> Privacy Policy</span>\n                <span class=\"purple-font\" data-toggle=\"modal\" data-target=\"#TermsConditionsModal\" (click)=\"TermsConditions()\" id=\"TermsConditions\"> Terms and Conditions</span>\n                <span class=\"purple-font\" data-toggle=\"modal\" data-target=\"#TermsUseModal\" (click)=\"TermsUse()\" id=\"TermsUse\"> Terms of Use</span>\n            </p> -->\n          <button nbButton fullWidth type=\"submit\" size=\"small\" status=\"success\"\n            [disabled]=\"signupForm.disabled\" class=\"signin-btn mb-3\">Signup</button>\n        </form>\n\n                            <!--<div class=\"mt-2 unauthorized f-w text-center\">\n                              <ng-container *ngIf=\"error; else unauthorized\">\n                                You entered wrong data.\n                              </ng-container>\n                              <ng-template #unauthorized>\n                                <div class=\"spinner\" *ngIf=\"sending\"></div>\n                              </ng-template>\n                            </div>-->\n                            \n                            <div class=\"text-center\">\n                                <p class=\"login-labels mb-2\">Already a user?<span class=\"purple-font\" (click)=\"login()\" id=\"RecoverPassword\"> Login Now</span></p>\n                                <p class=\"login-labels\">\n                                    Don't have an account? <a class=\"purple-font\" href=\"https://cryptowzrd.com/products/membership\">Become a member</a>\n                                </p>\n                            </div>\n                        </div>\n\n                        <!-- <div class=\"forgotPasswordWrapper\">\n                            <div class=\"loginForm\">\n                                <div class=\"login-subheader\">We will send you an email to reset your password.</div>\n                                <input type=\"email\" name=\"email\" placeholder=\"Enter your email...\" nbInput required formControlName=\"email\" class=\"formWidth my-1 loginInput\">\n                                <button nbButton fullWidth type=\"submit\" size=\"small\" status=\"success\"\n                                  [disabled]=\"loginForm.disabled\" class=\"signin-btn submit-top\">Submit</button>\n                                  <p class=\"cancelLink\" id=\"cancelLink\">Cancel</p>\n                            </div>\n                        </div> -->\n\n                    </div>\n                </div>\n\n                <div class=\"login-right\">\n                    <div class=\"login-right-inner\">\n                        <div class=\"container slider-pw adjustWidthCarousel hideDesktop\">\n                            <div id=\"carousel-example-generic-m\" class=\"carousel carousel-m slide\" data-ride=\"carousel\">\n                              \n                              <ol class=\"carousel-indicators\">\n                                <li data-target=\"#carousel-example-generic-m\" data-slide-to=\"0\" class=\"active\"></li>\n                                <li data-target=\"#carousel-example-generic-m\" data-slide-to=\"1\"></li>\n                                <li data-target=\"#carousel-example-generic-m\" data-slide-to=\"2\"></li>\n                                </ol>\n                              <!-- Wrapper for slides -->\n                              <div class=\"carousel-inner\" role=\"listbox\">\t\t\t\t\t\t\t\t\n                                <div class=\"carousel-item carousel-item-m first-c active\">       \n                                  \n                                    <div>\n                                      <div class=\"flex-vertical\">\t\t\t  \n                                        <nb-card-body class=\"p-0\">\n                                        <img class=\"carouselImg\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/Dashboard-_-Traders-Hub.png?19882\"/>\n                                        </nb-card-body>\n                                        </div>\n                                    </div>\n                                  \n                                  \n                                </div>\n            \n                                <div class=\"carousel-item carousel-item-m\">       \n                                  \n                                      <div>\t\t\t\t\t  \n                                        <div class=\"flex-vertical\">\t\t\t  \n                                          <nb-card-body class=\"p-0\"><img class=\"carouselImg\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/Course-Page-_-Library.png?19882\"/></nb-card-body>\n                                        </div>          \n                                      </div>\n                                      \n                                </div>\n                                <div class=\"carousel-item carousel-item-m\">       \n                                    \n                                      <div>\n                                        <div class=\"flex-vertical\">\t\t\t  \n                                        <nb-card-body class=\"p-0\">\n                                          <img class=\"carouselImg\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/Traders-Hub-_-Portfolio.png?19882\"/>\n                                        </nb-card-body>\n                                        </div>\n                                      </div>\n                                      \n                                </div>                                \n                                </div>\n            \n                                <a class=\"carousel-control-prev carousel-control-prev-m d-none\" href=\"#carousel-example-generic-m\" role=\"button\" data-slide=\"prev\">\t\t\t\t    \n                                  <i class=\"nb-arrow-left\"></i>\n                                  <span class=\"sr-only\">Previous</span>\n                                  </a>\n                                  <a class=\"carousel-control-next carousel-control-next-m d-none\" href=\"#carousel-example-generic-m\" role=\"button\" data-slide=\"next\">\n                                  <i class=\"nb-arrow-right\"></i>\n                                  <span class=\"sr-only\">Next</span>\n                                  </a>\n                              </div>        \n                        </div>\n                        <img class=\"login-map\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/wolrd-map-t.png?5941\"/>\n                    </div>\n                </div>\n\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>\n\n<!-- <div class=\"modal fade\" id=\"privacyPolicyModal\">\n    <div class=\"modal-dialog modal-xl\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" style=\"font-size: 21px; color: #a361ff; font-weight: 600;\">Privacy Policy</h4>\n                <button type=\"button\" class=\"close\" (click)=\"hideModal()\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh\n                    tellus molestie nunc non blandit massa. Lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar mattis . Nisl tincidunt eget nullam non nisi.\n                    Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Id interdum velit laoreet id. Volutpat blandit aliquam etiam erat velit\n                    scelerisque in. Risus viverra adipiscing at in tellus. Id aliquet lectus proin nibh. Consequat id porta nibh venenatis cras sed felis eget. Fermentum\n                    leo vel orci porta non.\n                </p>\n                <p>\n\n                    Orci porta non pulvinar neque laoreet suspendisse interdum. Imperdiet proin fermentum leo vel. Dapibus ultrices in iaculis nunc sed augue lacus. Purus\n                    non enim praesent elementum facilisis leo vel fringilla est. Vulputate ut pharetra sit amet aliquam. In nulla posuere sollicitudin aliquam ultrices\n                    sagittis orci a scelerisque. At elementum eu facilisis sed. Commodo odio aenean sed adipiscing. Eu turpis egestas pretium aenean. Urna nec tincidunt\n                    praesent semper feugiat nibh sed pulvinar. Cras ornare arcu dui vivamus arcu felis. Iaculis urna id volutpat lacus laoreet non. In massa tempor nec\n                    feugiat nisl pretium fusce. Diam phasellus vestibulum lorem sed risus ultricies.\n                </p>\n                <p>\n\n                    A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Sagittis purus sit amet volutpat consequat mauris nunc congue. Dictumst\n                    vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Quisque egestas diam in arcu cursus euismod quis viverra. Auctor elit sed vulputate mi\n                    sit amet. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Turpis egestas integer eget aliquet nibh praesent tristique. Duis\n                    ultricies lacus sed turpis tincidunt id aliquet risus. Convallis aenean et tortor at risus viverra adipiscing. Sagittis id consectetur purus ut\n                    faucibus pulvinar elementum integer enim. Amet risus nullam eget felis eget. Ipsum dolor sit amet consectetur adipiscing elit duis tristique\n                    sollicitudin. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ut etiam sit amet nisl purus in mollis. In nisl nisi scelerisque eu\n                    ultrices vitae auctor. Quisque id diam vel quam. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.\n                </p>\n                <p>\n                  \n                    Quisque non tellus orci ac auctor augue. Et tortor consequat id porta nibh venenatis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.\n                    Ante metus dictum at tempor commodo ullamcorper a. Netus et malesuada fames ac turpis egestas integer eget aliquet. Tristique senectus et netus et\n                    malesuada fames. Mattis vulputate enim nulla aliquet. Etiam sit amet nisl purus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Integer\n                    eget aliquet nibh praesent tristique magna sit. Etiam dignissim diam quis enim lobortis. Tincidunt arcu non sodales neque. Praesent semper feugiat\n                    nibh sed pulvinar proin gravida hendrerit. Scelerisque in dictum non consectetur a erat nam at lectus.\n                </p>\n                <p>\n                    In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Egestas sed tempus urna et. Bibendum arcu vitae elementum curabitur vitae\n                    nunc. Tortor id aliquet lectus proin nibh nisl condimentum. Lectus urna duis convallis convallis tellus. Vivamus arcu felis bibendum ut tristique et\n                    egestas quis. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Donec pretium\n                    vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Aliquet sagittis id consectetur purus. Arcu cursus euismod quis viverra nibh. Egestas\n                    erat imperdiet sed euismod nisi porta lorem. Purus faucibus ornare suspendisse sed nisi lacus sed. Ac placerat vestibulum lectus mauris ultrices eros\n                    in cursus. Ac turpis egestas sed tempus urna et pharetra pharetra massa.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"signin-btn mb-0\" (click)=\"hideModalAgree()\" style=\"padding: 5px 20px!important; color: #FFFFFF!important;\">Agree</button>\n                <button type=\"button\" id=\"close-modal\" data-dismiss=\"modal\" style=\"display: none\">Close</button>                \n            </div>\n        </div>\n\n\t</div>\n</div>\n\n\n<div class=\"modal fade\" id=\"TermsConditions\">\n    <div class=\"modal-dialog modal-xl\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" style=\"font-size: 21px; color: #a361ff; font-weight: 600;\">Privacy Policy</h4>\n                <button type=\"button\" class=\"close\" (click)=\"hideModal()\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh\n                    tellus molestie nunc non blandit massa. Lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar mattis . Nisl tincidunt eget nullam non nisi.\n                    Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Id interdum velit laoreet id. Volutpat blandit aliquam etiam erat velit\n                    scelerisque in. Risus viverra adipiscing at in tellus. Id aliquet lectus proin nibh. Consequat id porta nibh venenatis cras sed felis eget. Fermentum\n                    leo vel orci porta non.\n                </p>\n                <p>\n\n                    Orci porta non pulvinar neque laoreet suspendisse interdum. Imperdiet proin fermentum leo vel. Dapibus ultrices in iaculis nunc sed augue lacus. Purus\n                    non enim praesent elementum facilisis leo vel fringilla est. Vulputate ut pharetra sit amet aliquam. In nulla posuere sollicitudin aliquam ultrices\n                    sagittis orci a scelerisque. At elementum eu facilisis sed. Commodo odio aenean sed adipiscing. Eu turpis egestas pretium aenean. Urna nec tincidunt\n                    praesent semper feugiat nibh sed pulvinar. Cras ornare arcu dui vivamus arcu felis. Iaculis urna id volutpat lacus laoreet non. In massa tempor nec\n                    feugiat nisl pretium fusce. Diam phasellus vestibulum lorem sed risus ultricies.\n                </p>\n                <p>\n\n                    A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Sagittis purus sit amet volutpat consequat mauris nunc congue. Dictumst\n                    vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Quisque egestas diam in arcu cursus euismod quis viverra. Auctor elit sed vulputate mi\n                    sit amet. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Turpis egestas integer eget aliquet nibh praesent tristique. Duis\n                    ultricies lacus sed turpis tincidunt id aliquet risus. Convallis aenean et tortor at risus viverra adipiscing. Sagittis id consectetur purus ut\n                    faucibus pulvinar elementum integer enim. Amet risus nullam eget felis eget. Ipsum dolor sit amet consectetur adipiscing elit duis tristique\n                    sollicitudin. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ut etiam sit amet nisl purus in mollis. In nisl nisi scelerisque eu\n                    ultrices vitae auctor. Quisque id diam vel quam. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.\n                </p>\n                <p>\n                  \n                    Quisque non tellus orci ac auctor augue. Et tortor consequat id porta nibh venenatis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.\n                    Ante metus dictum at tempor commodo ullamcorper a. Netus et malesuada fames ac turpis egestas integer eget aliquet. Tristique senectus et netus et\n                    malesuada fames. Mattis vulputate enim nulla aliquet. Etiam sit amet nisl purus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Integer\n                    eget aliquet nibh praesent tristique magna sit. Etiam dignissim diam quis enim lobortis. Tincidunt arcu non sodales neque. Praesent semper feugiat\n                    nibh sed pulvinar proin gravida hendrerit. Scelerisque in dictum non consectetur a erat nam at lectus.\n                </p>\n                <p>\n                    In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Egestas sed tempus urna et. Bibendum arcu vitae elementum curabitur vitae\n                    nunc. Tortor id aliquet lectus proin nibh nisl condimentum. Lectus urna duis convallis convallis tellus. Vivamus arcu felis bibendum ut tristique et\n                    egestas quis. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Donec pretium\n                    vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Aliquet sagittis id consectetur purus. Arcu cursus euismod quis viverra nibh. Egestas\n                    erat imperdiet sed euismod nisi porta lorem. Purus faucibus ornare suspendisse sed nisi lacus sed. Ac placerat vestibulum lectus mauris ultrices eros\n                    in cursus. Ac turpis egestas sed tempus urna et pharetra pharetra massa.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"signin-btn mb-0\" (click)=\"hideModalAgree()\" style=\"padding: 5px 20px!important; color: #FFFFFF!important;\">Agree</button>\n                <button type=\"button\" id=\"close-modal\" data-dismiss=\"modal\" style=\"display: none\">Close</button>                \n            </div>\n        </div>\n\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"TermsUse\">\n    <div class=\"modal-dialog modal-xl\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" style=\"font-size: 21px; color: #a361ff; font-weight: 600;\">Privacy Policy</h4>\n                <button type=\"button\" class=\"close\" (click)=\"hideModal()\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh\n                    tellus molestie nunc non blandit massa. Lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar mattis . Nisl tincidunt eget nullam non nisi.\n                    Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Id interdum velit laoreet id. Volutpat blandit aliquam etiam erat velit\n                    scelerisque in. Risus viverra adipiscing at in tellus. Id aliquet lectus proin nibh. Consequat id porta nibh venenatis cras sed felis eget. Fermentum\n                    leo vel orci porta non.\n                </p>\n                <p>\n\n                    Orci porta non pulvinar neque laoreet suspendisse interdum. Imperdiet proin fermentum leo vel. Dapibus ultrices in iaculis nunc sed augue lacus. Purus\n                    non enim praesent elementum facilisis leo vel fringilla est. Vulputate ut pharetra sit amet aliquam. In nulla posuere sollicitudin aliquam ultrices\n                    sagittis orci a scelerisque. At elementum eu facilisis sed. Commodo odio aenean sed adipiscing. Eu turpis egestas pretium aenean. Urna nec tincidunt\n                    praesent semper feugiat nibh sed pulvinar. Cras ornare arcu dui vivamus arcu felis. Iaculis urna id volutpat lacus laoreet non. In massa tempor nec\n                    feugiat nisl pretium fusce. Diam phasellus vestibulum lorem sed risus ultricies.\n                </p>\n                <p>\n\n                    A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Sagittis purus sit amet volutpat consequat mauris nunc congue. Dictumst\n                    vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Quisque egestas diam in arcu cursus euismod quis viverra. Auctor elit sed vulputate mi\n                    sit amet. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Turpis egestas integer eget aliquet nibh praesent tristique. Duis\n                    ultricies lacus sed turpis tincidunt id aliquet risus. Convallis aenean et tortor at risus viverra adipiscing. Sagittis id consectetur purus ut\n                    faucibus pulvinar elementum integer enim. Amet risus nullam eget felis eget. Ipsum dolor sit amet consectetur adipiscing elit duis tristique\n                    sollicitudin. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ut etiam sit amet nisl purus in mollis. In nisl nisi scelerisque eu\n                    ultrices vitae auctor. Quisque id diam vel quam. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.\n                </p>\n                <p>\n                  \n                    Quisque non tellus orci ac auctor augue. Et tortor consequat id porta nibh venenatis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.\n                    Ante metus dictum at tempor commodo ullamcorper a. Netus et malesuada fames ac turpis egestas integer eget aliquet. Tristique senectus et netus et\n                    malesuada fames. Mattis vulputate enim nulla aliquet. Etiam sit amet nisl purus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Integer\n                    eget aliquet nibh praesent tristique magna sit. Etiam dignissim diam quis enim lobortis. Tincidunt arcu non sodales neque. Praesent semper feugiat\n                    nibh sed pulvinar proin gravida hendrerit. Scelerisque in dictum non consectetur a erat nam at lectus.\n                </p>\n                <p>\n                    In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Egestas sed tempus urna et. Bibendum arcu vitae elementum curabitur vitae\n                    nunc. Tortor id aliquet lectus proin nibh nisl condimentum. Lectus urna duis convallis convallis tellus. Vivamus arcu felis bibendum ut tristique et\n                    egestas quis. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Donec pretium\n                    vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Aliquet sagittis id consectetur purus. Arcu cursus euismod quis viverra nibh. Egestas\n                    erat imperdiet sed euismod nisi porta lorem. Purus faucibus ornare suspendisse sed nisi lacus sed. Ac placerat vestibulum lectus mauris ultrices eros\n                    in cursus. Ac turpis egestas sed tempus urna et pharetra pharetra massa.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"signin-btn mb-0\" (click)=\"hideModalAgree()\" style=\"padding: 5px 20px!important; color: #FFFFFF!important;\">Agree</button>\n                <button type=\"button\" id=\"close-modal\" data-dismiss=\"modal\" style=\"display: none\">Close</button>                \n            </div>\n        </div>\n\n\t</div>\n</div> -->\n\n<div class=\"modal fade\" id=\"alertModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content alert-modal-content\">\n          <div class=\"modal-body text-center\">\n              <button  type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <div class=\"pt-5 pb-5\">\n                  <div>\n                      {{alertModalMessage}}\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginCard {\n  width: 330px; }\n\n.error {\n  color: #ff386a;\n  font-size: .5em;\n  margin-top: 4px;\n  margin-bottom: 4px; }\n\n.unauthorized {\n  height: 40px; }\n\n.wholeScreen {\n  width: 100%;\n  height: 100%; }\n\n.login-header {\n  font-size: 1em;\n  margin-bottom: 60px;\n  font-weight: 500; }\n\n.login-logo {\n  width: 20%;\n  max-width: 1000px; }\n\n.login-left {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center; }\n\n@media (min-width: 768px) {\n    .login-left {\n      width: 50%; } }\n\n.one-half-login {\n  width: 100%;\n  margin: 0 auto; }\n\n@media (max-width: 768px) {\n    .one-half-login {\n      width: 50%;\n      display: -webkit-box;\n      display: flex; } }\n\n.login-right {\n  width: 50%;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, from(#a361ff), to(#6f77ff));\n  background-image: linear-gradient(to right, #a361ff, #6f77ff);\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  position: relative; }\n\n@media (min-width: 768px) {\n    .login-right {\n      width: 50%;\n      display: -webkit-box;\n      display: flex; } }\n\n.laptop-phone {\n  position: absolute;\n  width: 60%;\n  /* centering */\n  position: absolute;\n  text-align: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%); }\n\n.login-map {\n  width: 100%; }\n\n.wholeScreen {\n  background-color: #fff;\n  background: #fff;\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.loginForm {\n  width: 80%;\n  margin: 0 auto; }\n\n@media (min-width: 768px) {\n    .loginForm {\n      width: 50%; } }\n\n.login-header {\n  margin-top: 10px;\n  color: #3d4246; }\n\n.formWidth {\n  width: 100%;\n  background-color: #fff;\n  color: #000;\n  font-size: 10px !important; }\n\n@media (min-width: 768px) {\n    .formWidth {\n      font-size: 14px !important; } }\n\n.formWidth:focus {\n  background-color: #fff; }\n\n.formWidth::-webkit-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth::-moz-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth::-ms-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth::placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #949494; }\n\n.formWidth::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #949494; }\n\n.login-labels {\n  font-size: .7em;\n  color: #69727b;\n  margin-bottom: 6px; }\n\n.purple-font {\n  color: #a361ff; }\n\n.signin-btn {\n  background-image: -webkit-gradient(linear, left top, right top, from(#a361ff), to(#6f77ff));\n  background-image: linear-gradient(to right, #a361ff, #6f77ff); }\n\n.signin-btn:hover {\n  opacity: .7; }\n\n.login-subheader {\n  font-size: .7em;\n  color: #69727b;\n  margin-bottom: 1rem; }\n\n.forgotPasswordWrapper {\n  display: none;\n  color: #69727b; }\n\n.submit-top {\n  margin-top: 16px; }\n\n.cancelLink {\n  color: #69727b;\n  margin-top: 0;\n  cursor: pointer;\n  font-size: .9rem;\n  font-weight: 500; }\n\n.purple-font {\n  cursor: pointer; }\n\n.purple-font:hover {\n  text-decoration: none;\n  color: #00f9a6; }\n\n.login-left-inner, .enterUsername, .login-subheader, .error, .signin-btn, .unauthorized, .login-labels {\n  font-weight: 500; }\n\n.loginInput {\n  border: 1px solid #949494; }\n\n.loginInput::-webkit-input-placeholder {\n  font-weight: 500; }\n\n.loginInput::-moz-placeholder {\n  font-weight: 500; }\n\n.loginInput::-ms-input-placeholder {\n  font-weight: 500; }\n\n.loginInput::placeholder {\n  font-weight: 500; }\n\n.purple-font {\n  font-size: inherit;\n  font-weight: 500; }\n\n.errorMessage {\n  font-size: 1.25em; }\n\n.signin-btn {\n  margin-bottom: 19.5px;\n  border-radius: 15px !important;\n  border: 0px solid transparent;\n  padding: 10px 18px !important;\n  line-height: 1.8 !important; }\n\n::ng-deep.customSelect nb-select button {\n  max-width: none !important;\n  background: white !important;\n  color: gray !important;\n  border-color: lightgrey !important;\n  font-size: 15px !important;\n  font-family: inherit !important; }\n\n#profile-image {\n  margin: auto;\n  height: 100px;\n  width: 100px;\n  margin-top: 1.5rem;\n  border-radius: 50%;\n  position: relative;\n  background: url(\"/assets/profile/profile-img.png\");\n  background-position: center;\n  background-size: cover;\n  border: 3px solid white;\n  box-shadow: 0 3px 12px 2px #212121a0; }\n\n#profile-image-wizme {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  position: relative;\n  background: url(\"/assets/profile/profile-img.png\");\n  background-position: center;\n  background-size: cover;\n  border: 3px solid white;\n  box-shadow: 0 3px 12px 2px #212121a0; }\n\n@media (min-width: 756px) {\n  #profile-image {\n    height: 160px;\n    width: 160px;\n    margin-top: 0rem; } }\n\n#edit-profile-image {\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #212121a0;\n  border-radius: 50%;\n  display: none;\n  cursor: pointer; }\n\n#edit-profile-image i {\n    color: white;\n    font-size: 2rem; }\n\n#edit-profile-image:active, #background > i:active {\n  opacity: 0.5; }\n\n#profile-image:hover #edit-profile-image {\n  display: -webkit-box;\n  display: flex; }\n\n::ng-deep .nb-theme-cosmic nb-checkbox .customised-control-input:checked + .customised-control-indicator::before {\n  border-color: green !important; }\n\n.carouselImg {\n  width: 100%; }\n\n.carousel-indicators {\n  bottom: -45px;\n  display: none; }\n\n.adjustWidthCarousel {\n  position: absolute;\n  width: 60%;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  /* centering */\n  position: absolute;\n  text-align: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL29zY2FyL0Rvd25sb2Fkcy9Gcm9udGVuZF9WMy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBWSxFQUNiOztBQUVEO0VBQ0UsZUFBYztFQUNkLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUNEO0VBQ0UsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1Ysa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLDZCQUFzQjtFQUF0Qiw4QkFBc0I7VUFBdEIsdUJBQXNCO0VBQ3RCLG1CQUFrQixFQUluQjs7QUNtQkM7SUQ3QkY7TUFRQyxXQUFVLEVBRVYsRUFBQTs7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjLEVBS2Y7O0FBSkM7SUFIRjtNQUlJLFdBQVU7TUFDYixxQkFBYTtNQUFiLGNBQWEsRUFFYixFQUFBOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWiw0RkFBOEQ7RUFBOUQsOERBQThEO0VBQzlELGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLDZCQUFzQjtFQUF0Qiw4QkFBc0I7VUFBdEIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFLbkI7O0FDSEM7SURWRjtNQVVFLFdBQVU7TUFDVixxQkFBYTtNQUFiLGNBQWEsRUFFZCxFQUFBOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixlQUFlO0VBQUMsbUJBQWtCO0VBQUUsbUJBQWtCO0VBQUUsVUFBUztFQUFFLFNBQVE7RUFBRSxpQ0FBZ0M7RUFBRSx5Q0FBd0M7RUFBRSxzQ0FBcUM7RUFBRSxxQ0FBb0M7RUFBRSxvQ0FBbUMsRUFDMVE7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDSSx1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxXQUFVO0VBQ1YsZUFBYyxFQUlqQjs7QUN4QkM7SURrQkY7TUFJSSxXQUFVLEVBRWIsRUFBQTs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksWUFBVztFQUNYLHVCQUFzQjtFQUN0QixZQUFXO0VBQ2QsMkJBQTBCLEVBSTFCOztBQ3JDQztJRDZCRjtNQU1FLDJCQUEwQixFQUUzQixFQUFBOztBQUNEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUNEO0VBQTBCLDRCQUE0QjtFQUNsRCxlQUFjLEVBQ2pCOztBQUZEO0VBQTBCLDRCQUE0QjtFQUNsRCxlQUFjLEVBQ2pCOztBQUZEO0VBQTBCLDRCQUE0QjtFQUNsRCxlQUFjLEVBQ2pCOztBQUZEO0VBQTBCLDRCQUE0QjtFQUNsRCxlQUFjLEVBQ2pCOztBQUVEO0VBQW1DLDZCQUE2QjtFQUM1RCxlQUFjLEVBQ2pCOztBQUVEO0VBQW9DLG9CQUFvQjtFQUNwRCxlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUNJLDRGQUE2RDtFQUE3RCw4REFBNkQsRUFDaEU7O0FBQ0Q7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxzQkFBcUI7RUFDckIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFGRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFGRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFGRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxzQkFBcUI7RUFDckIsK0JBQThCO0VBQzlCLDhCQUE2QjtFQUM3Qiw4QkFBNkI7RUFDN0IsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0UsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUM1Qix1QkFBc0I7RUFDdEIsbUNBQWtDO0VBQ2xDLDJCQUEwQjtFQUMxQixnQ0FBK0IsRUFDbEM7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixtREFBa0Q7RUFDbEQsNEJBQTJCO0VBQzNCLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIscUNBQW9DLEVBQ3JDOztBQUNEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG1EQUFrRDtFQUNsRCw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDSTtJQUNJLGNBQWE7SUFDYixhQUFZO0lBQ1osaUJBQWdCLEVBRW5CLEVBQUE7O0FBRUw7RUFDRSxtQkFBa0I7RUFDbEIsUUFBTztFQUNQLGFBQVk7RUFDWixZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsZ0JBQWUsRUFLaEI7O0FBYkQ7SUFVSSxhQUFZO0lBQ1osZ0JBQWUsRUFDaEI7O0FBR0g7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFFSSxxQkFBYTtFQUFiLGNBQWEsRUFDZDs7QUFHSDtFQUNFLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGNBQWE7RUFDYixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGVBQWM7RUFDZCxTQUFRO0VBQ1IsVUFBUztFQUNULGVBQWU7RUFBQyxtQkFBa0I7RUFBRSxtQkFBa0I7RUFBRSxVQUFTO0VBQUUsU0FBUTtFQUFFLGlDQUFnQztFQUFFLHlDQUF3QztFQUFFLHNDQUFxQztFQUFFLHFDQUFvQztFQUFFLG9DQUFtQyxFQUMxUSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2Nzcyc7XG5cbi5sb2dpbkNhcmQge1xuICAgIHdpZHRoOiAzMzBweDtcbiAgfVxuICBcbiAgLmVycm9yIHtcbiAgICBjb2xvcjogI2ZmMzg2YTtcbiAgICBmb250LXNpemU6IC41ZW07XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBcbiAgLnVuYXV0aG9yaXplZCB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLndob2xlU2NyZWVuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5sb2dpbi1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAubG9naW4tbG9nbyB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxuICAubG9naW4tbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgXHR3aWR0aDogNTAlO1xuICB9XG4gIH1cbiAgLm9uZS1oYWxmLWxvZ2luIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAgICAgd2lkdGg6IDUwJTtcbiAgXHRkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuICAubG9naW4tcmlnaHQgeyAgXG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTM2MWZmICwgIzZmNzdmZik7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFx0QGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICBcdFx0d2lkdGg6IDUwJTtcbiAgXHRcdGRpc3BsYXk6IGZsZXg7XG4gIFx0fVxuICB9XG4gIC5sYXB0b3AtcGhvbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIC8qIGNlbnRlcmluZyAqLyBwb3NpdGlvbjogYWJzb2x1dGU7IHRleHQtYWxpZ246IGNlbnRlcjsgbGVmdDogNTAlOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLmxvZ2luLW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7ICBcbiAgfVxuICAud2hvbGVTY3JlZW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAubG9naW5Gb3JtIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICBcdEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBcdFx0d2lkdGg6IDUwJTtcbiAgICBcdH1cbiAgfVxuICAubG9naW4taGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBjb2xvcjogIzNkNDI0NjtcbiAgfVxuICAuZm9ybVdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiAjMDAwO1xuXHQgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBcdCAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICBcdFx0Zm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIFx0ICB9IFxuICB9XG4gIC5mb3JtV2lkdGg6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuZm9ybVdpZHRoOjpwbGFjZWhvbGRlciB7IC8qIEZpcmVmb3gsIENocm9tZSwgT3BlcmEgKi8gXG4gICAgICBjb2xvcjogIzk0OTQ5NDsgXG4gIH0gXG4gICAgXG4gIC5mb3JtV2lkdGg6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi8gXG4gICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgfSBcbiAgICBcbiAgLmZvcm1XaWR0aDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi8gXG4gICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgfSBcbiAgLmxvZ2luLWxhYmVscyB7XG4gICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICBjb2xvcjogIzY5NzI3YjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxuICAucHVycGxlLWZvbnQge1xuICAgICAgY29sb3I6ICNhMzYxZmY7XG4gIH1cbiAgLnNpZ25pbi1idG4ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTM2MWZmLCAjNmY3N2ZmKTtcbiAgfVxuICAuc2lnbmluLWJ0bjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuNztcbiAgfVxuICAubG9naW4tc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgIGNvbG9yOiAjNjk3MjdiO1x0XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5mb3Jnb3RQYXNzd29yZFdyYXBwZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGNvbG9yOiAjNjk3MjdiO1xuICB9XG4gIC5zdWJtaXQtdG9wIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgLmNhbmNlbExpbmsge1xuICAgICAgY29sb3I6ICM2OTcyN2I7XHRcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAucHVycGxlLWZvbnQge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5wdXJwbGUtZm9udDpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzAwZjlhNjtcbiAgfVxuICAubG9naW4tbGVmdC1pbm5lciwgLmVudGVyVXNlcm5hbWUsIC5sb2dpbi1zdWJoZWFkZXIsIC5lcnJvciwgLnNpZ25pbi1idG4sIC51bmF1dGhvcml6ZWQsIC5sb2dpbi1sYWJlbHMge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAubG9naW5JbnB1dCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xuICB9XG4gIC5sb2dpbklucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1x0XG4gIH1cbiAgLnB1cnBsZS1mb250IHtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmVycm9yTWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgfVxuICAuc2lnbmluLWJ0biB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOS41cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMThweCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuOCAhaW1wb3J0YW50O1x0XG4gIH1cbiAgOjpuZy1kZWVwLmN1c3RvbVNlbGVjdCBuYi1zZWxlY3QgIGJ1dHRvbiB7XG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDsgICAgIFxufVxuI3Byb2ZpbGUtaW1hZ2Uge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07ICBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9wcm9maWxlL3Byb2ZpbGUtaW1nLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMnB4ICMyMTIxMjFhMDtcbiAgfVxuICAjcHJvZmlsZS1pbWFnZS13aXptZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3Byb2ZpbGUvcHJvZmlsZS1pbWcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMTJweCAycHggIzIxMjEyMWEwO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NTZweCkge1xuICAgICAgI3Byb2ZpbGUtaW1hZ2V7XG4gICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICAgICAgICBcbiAgICAgIH1cbiAgfVxuICAjZWRpdC1wcm9maWxlLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzIxMjEyMWEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbiAgXG4gICNlZGl0LXByb2ZpbGUtaW1hZ2U6YWN0aXZlLCAjYmFja2dyb3VuZCA+IGk6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgXG4gICNwcm9maWxlLWltYWdlOmhvdmVyIHtcbiAgICAjZWRpdC1wcm9maWxlLWltYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5uYi10aGVtZS1jb3NtaWMgbmItY2hlY2tib3ggLmN1c3RvbWlzZWQtY29udHJvbC1pbnB1dDpjaGVja2VkICsgLmN1c3RvbWlzZWQtY29udHJvbC1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2Fyb3VzZWxJbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IC00NXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFkanVzdFdpZHRoQ2Fyb3VzZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAvKiBjZW50ZXJpbmcgKi8gcG9zaXRpb246IGFic29sdXRlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGxlZnQ6IDUwJTsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _models_CountryList_country_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/CountryList/country-list */ "./src/app/models/CountryList/country-list.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _signup_choose_profile_img_signup_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup-choose-profile-img/signup-choose-profile-img.component */ "./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.ts");










var SignupComponent = /** @class */ (function () {
    function SignupComponent(dialog, _dataservice, _router, router, route, _passingDataservice, toastrService, _configuration) {
        var _this = this;
        this.dialog = dialog;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'confirmpassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'birthDay': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'licenseKey': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.headerImg = '/assets/profile/HeaderDefault.png';
        this.profileImg = '/assets/profile/profile-img-1.png';
        this.checked = false;
        this.alertModalMessage = '';
        this.agreePrivacyPolicy = false;
        this.termsAndConditionChecked = false;
        this.countries = _models_CountryList_country_list__WEBPACK_IMPORTED_MODULE_2__["countryList"];
        this.signUpClicked = false;
        this.sending = false;
        this.success = false;
        this.signup = function () {
            _this.signUpClicked = true;
            if (true) {
                _this.errorMessage = '';
                var email = _this.signupForm.controls['email'].value;
                var password = _this.signupForm.controls['password'].value;
                var confirmpassword = _this.signupForm.controls['confirmpassword'].value;
                var firstName = _this.signupForm.controls['firstName'].value;
                var lastName = _this.signupForm.controls['lastName'].value;
                var birthDay = _this.signupForm.controls['birthDay'].value;
                var country = _this.signupForm.controls['country'].value.name;
                var licenseKey = _this.signupForm.controls['licenseKey'].value;
                var username = _this.signupForm.controls['username'].value;
                var Gender = _this.signupForm.controls['gender'].value;
                if (password !== confirmpassword) {
                    _this.alertModalMessage = 'Please provide same passwords';
                    $('#alertModal').modal('show');
                    return;
                }
                if (_this.signupForm.valid && password === confirmpassword) {
                    _this.sending = true;
                    _this._dataservice
                        .postCall(_this._configuration.AuthSignupApi, {
                        'email': email,
                        'password': password,
                        'firstName': firstName,
                        'lastName': lastName,
                        'country': country,
                        'birthDay': birthDay,
                        'licenseKey': licenseKey,
                        'username': username,
                        'profile_pic': _this.profileImg
                    })
                        .subscribe(function (resp) {
                        if (resp.status === _this._configuration.ResponseStatusError) {
                            _this.sending = false;
                            _this.errorMessage = resp.message;
                            return;
                        }
                        _this.success = true;
                        _this.sending = false;
                    }, function (error) {
                        console.log(error);
                        _this.toastrService.show(_this._configuration.ErrorSignup, '', {
                            status: _this._configuration.ToasterStatusError,
                            duration: _this._configuration.ToasterDuration,
                            position: _this._configuration.ToasterPosition
                        });
                        _this.sending = false;
                    }, function () {
                    });
                }
            }
        };
        this.login = function () {
            _this.router.navigateByUrl('/login').then();
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onAgreeChange = function ($event) {
        this.agreePrivacyPolicy = $event.target.checked;
    };
    SignupComponent.prototype.showPrivacyPolicy = function () {
        $('#privacyPolicyModal').modal('show');
    };
    SignupComponent.prototype.chooseProfileImg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialog, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = this.dialog.open(_signup_choose_profile_img_signup_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_9__["SignupChooseProfileImgComponent"], {
                            context: {
                                selected: this.profileImg
                            }
                        });
                        return [4 /*yield*/, dialog.onClose.toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.profileImg = res;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent.prototype.hideModal = function () {
        document.getElementById('close-modal').click();
    };
    SignupComponent.prototype.hideModalAgree = function () {
        this.agreePrivacyPolicy = true;
        document.getElementById('close-modal').click();
    };
    SignupComponent.prototype.validateInput = function (input) {
        return input.touched && input.invalid;
    };
    SignupComponent.prototype.showError = function (input) {
        if (input.errors.required) {
            return this._configuration.FieldRequired;
        }
        else if (input.errors.email) {
            return 'You need to enter valid email.';
        }
    };
    SignupComponent.prototype.toggle = function (event) {
        this.termsAndConditionChecked = event.target.checked;
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _signup_choose_profile_img_signup_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup-choose-profile-img/signup-choose-profile-img.component */ "./src/app/pages/signup/signup-choose-profile-img/signup-choose-profile-img.component.ts");








var routes = [
    { path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] }
];
var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _signup_choose_profile_img_signup_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_7__["SignupChooseProfileImgComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forChild(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"]
            ],
            entryComponents: [_signup_choose_profile_img_signup_choose_profile_img_component__WEBPACK_IMPORTED_MODULE_7__["SignupChooseProfileImgComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module.js.map