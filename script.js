const submit = document.querySelector("#submit");
let rate;
const rateNum = (e) => {
  rate = e.target.innerText;
  if (rate.length > 1) {
    rate = "5";
  }
  return rate;
};

const thanksYouCard = () => {
  const container = document.querySelector(".container__card");
  if (rate == undefined) {
    rate = "5";
  }
  container.innerHTML = `
  <div class="lottie__animation">
  <lottie-player
    src="images/illustration-thank.json"
    background="transparent"
    speed=".5"
    autoplay
  ></lottie-player>
</div>
<div class="container__card-rate--slect">
  <p>You selected ${rate} out of 5</p>
</div>
<div class="container__card-title h1-thank"><h1>Thank you!</h1></div>
<div class="container__card-description p-thank">
  <p>
    We appreciate you taking the time to give a rating. If you ever need
    more support, don’t hesitate to get in touch!
  </p>
</div>
  `;
};

document
  .querySelectorAll(".container__card-rate")
  .forEach((container) => container.addEventListener("click", rateNum));

submit.addEventListener("click", thanksYouCard);
