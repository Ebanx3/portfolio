export const textColors = [
  "text-rose-400",
  "text-amber-400",
  "text-cyan-400",
  "text-emerald-400",
  "text-indigo-400",
  "text-sky-400",
];

export const borderColors = [
  "border-rose-400",
  "border-amber-400",
  "border-cyan-400",
  "border-emerald-400",
  "border-indigo-400",
  "border-sky-400",
];

export const hbgColors = [
  "hover:bg-rose-400",
  "hover:bg-amber-400",
  "hover:bg-cyan-400",
  "hover:bg-emerald-400",
  "hover:bg-indigo-400",
  "hover:bg-sky-400",
];

const hTextSecondary = [
  "hover:text-rose-300",
  "hover:text-amber-300",
  "hover:text-cyan-300",
  "hover:text-emerald-300",
  "hover:text-indigo-300",
  "hover:text-sky-300",
];

const getRandomIndex = () => {
  return Math.floor(Math.random() * 6);
};

export const index = getRandomIndex();

document.querySelectorAll(".text-primary").forEach((element) => {
  element.classList.remove("text-primary");
  element.classList.add(textColors[index]);
});

document.querySelectorAll(".hoverbg-primary").forEach((element) => {
  element.classList.remove("hoverbg-primary");
  element.classList.add(hbgColors[index]);
});

document.querySelectorAll(".hovertext-secondary").forEach((element) => {
  element.classList.remove("hovertext-secondary");
  element.classList.add(hTextSecondary[index]);
});

document.querySelectorAll(".border-primary").forEach((element) => {
  element.classList.remove("borderPrimary");
  element.classList.add(borderColors[index]);
});
