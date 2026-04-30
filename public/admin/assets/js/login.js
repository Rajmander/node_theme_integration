$(function () {
  const mobileInput = document.getElementById("mobile");
  const btn = document.getElementById("sendOtpBtn");

  const otpInput = document.getElementById("otp");
  const verifyOtpBtn = document.getElementById("verifyOtpBtn");

  otpInput.addEventListener("input", () => {
    // sanitize input
    otpInput.value = otpInput.value.replace(/\D/g, "");

    // validation
    const isValid = otpInput.value.length === 6;

    // toggle button
    verifyOtpBtn.disabled = !isValid;
  });

  mobileInput.addEventListener("input", () => {
    // sanitize input
    mobileInput.value = mobileInput.value.replace(/\D/g, "");

    // validation
    const isValid = mobileInput.value.length === 10;

    // toggle button
    btn.disabled = !isValid;
  });

  // Listen the sendOtpBtn
  $(document).on("click", "#sendOtpBtn", function (event) {
    event.preventDefault();
    console.log("clicked");
    $("#otpField").removeClass("d-none");
    $("#mobileSection").addClass("d-none");
    $("#sendOtp_btn").addClass("d-none");
    $("#otpField").removeClass("d-none");
    $("#verifyOtp_btn").removeClass("d-none");
  });
});
