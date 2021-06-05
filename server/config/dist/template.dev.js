"use strict";

exports.resetEmail = function (host, resetToken) {
  var message = {
    subject: "Reset Password",
    text: "".concat("You are receiving this because you have requested to reset your password for your account.\n\n" + "Please click on the following link, or paste this into your browser to complete the process:\n\n" + "http://").concat(host, "/reset-password/").concat(resetToken, "\n\n") + "If you did not request this, please ignore this email and your password will remain unchanged.\n"
  };
  return message;
};

exports.confirmResetPasswordEmail = function () {
  var message = {
    subject: "Password Changed",
    text: "You are receiving this email because you changed your password. \n\n" + "If you did not request this change, please contact us immediately."
  };
  return message;
};

exports.merchantSignup = function (host, _ref) {
  var resetToken = _ref.resetToken,
      email = _ref.email;
  var message = {
    subject: "Merchant Registration",
    text: "".concat("Congratulations! Your application has been accepted. Please complete your Merchant account signup by clicking on the link below. \n\n" + "Please click on the following link, or paste this into your browser to complete the process:\n\n" + "http://").concat(host, "/merchant-signup/").concat(resetToken, "?email=").concat(email, "\n\n")
  };
  return message;
};

exports.merchantWelcome = function (name) {
  var message = {
    subject: "Merchant Registration",
    text: "Hi ".concat(name, "! Congratulations! Your application for merchant account has been accepted. \n\n") + "It looks like you already have a member account with us. Please sign in with your member credentials and you will be able to see your merchant account."
  };
  return message;
};

exports.signupEmail = function (name) {
  var message = {
    subject: "Account Registration",
    text: "Hi ".concat(name.firstName, " ").concat(name.lastName, "! Thank you for creating an account with us!.")
  };
  return message;
};

exports.newsletterSubscriptionEmail = function () {
  var message = {
    subject: "Newsletter Subscription",
    text: "You are receiving this email because you subscribed to our newsletter. \n\n" + "If you did not request this change, please contact us immediately."
  };
  return message;
};

exports.contactEmail = function () {
  var message = {
    subject: "Contact Us",
    text: "We received your message! Our team will contact you soon. \n\n"
  };
  return message;
};

exports.merchantApplicationEmail = function () {
  var message = {
    subject: "Sell on MERN Store",
    text: "We received your request! Our team will contact you soon. \n\n"
  };
  return message;
};

exports.orderConfirmationEmail = function (order) {
  var message = {
    subject: "Order Confirmation ".concat(order._id),
    text: "Hi ".concat(order.user.profile.firstName, "! Thank you for your order!. \n\n") + "We've received your order and will contact you as soon as your package is shipped. \n\n"
  };
  return message;
};