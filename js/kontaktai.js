window.formspree = window.formspree || function () {
  (formspree.q = formspree.q || []).push(arguments);
};

formspree("initForm", {
  formElement: "#contact-form",
  formId: "moealyzy",
  data: {
    _replyto: function () {
      var field = document.querySelector("#contact-email");
      return field ? field.value : undefined;
    }
  }
});
