"use strict";

// Class Definition
var KTLogin = function () {
  var _login;

  var _showForm = function (form) {
    var cls = 'login-' + form + '-on';
    var form = 'kt_login_' + form + '_form';
    console.log(form)
    console.log(cls)

    _login.removeClass('login-forgot-on');
    _login.removeClass('login-signin-on');
    _login.removeClass('login-signup-on');
    _login.removeClass('login-confirmation-on');

    _login.addClass(cls);

    KTUtil.animateClass(KTUtil.getById(form), 'animate__animated animate__backInUp');
  }

  var _handleSignInForm = function () {

    $('#kt_login_forgot').on('click', function (e) {
      e.preventDefault();
      _showForm('forgot');
    });

    $('#kt_login_confirmation').on('click', function (e) {
      e.preventDefault();
      _showForm('confirmation');
    });

    $('#kt_login_signup').on('click', function (e) {
      e.preventDefault();
      _showForm('signup');
    });

    $('#kt_login_signup_cancel').on('click', function (e) {
      e.preventDefault();
      _showForm('signin');
    });

    $('#kt_login_forgot_cancel').on('click', function (e) {
      e.preventDefault();
      _showForm('signin');
    });

    $('#kt_login_confirmation_cancel').on('click', function (e) {
      e.preventDefault();
      _showForm('signin');
    });
  }

  return {

    init: function () {
      _login = $('#kt_login');

      _handleSignInForm();
    }
  };
}();

// Class Initialization
jQuery(document).ready(function () {
  KTLogin.init();
});
