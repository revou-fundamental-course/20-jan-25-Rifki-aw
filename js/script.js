let weight, height;
let age;

/* Fungsi menghitung BMI */
function calculate(event) {
  event.preventDefault(); // mencegah halaman me-refresh jika menggunakan submit

  // Ambil value gender
  const getGender = document.querySelector('input[name="gender"]:checked');

  // Validasi gender
  if (!getGender) {
    alert("Silahkan pilih jenis kelamin.");
    return;
  }
  const gender = getGender.value;

  // Ambil nilai BB
  weight = parseFloat(document.getElementById("weight").value);

  // Validasi BB
  if (isNaN(weight) || weight <= 0) {
    alert("Masukkan berat badan yang valid (lebih dari 0).");
    return;
  }

  // Ambil nilai TB
  height = parseFloat(document.getElementById("height").value) / 100;

  // Validasi TB
  if (isNaN(height) || height <= 0) {
    alert("Masukkan tinggi badan yang valid (lebih dari 0).");
    return;
  }

  // Ambil usia
  age = parseInt(document.getElementById("age").value);

  // Validasi usia
  if (isNaN(age) || age <= 0) {
    alert("Masukkan usia yang valid (lebih dari 0).");
    return;
  }

  // Hitung BMI
  const result = weight / (height * height);
  document.getElementById("result-bmi").innerHTML = result.toFixed(2);

  // Kategori
  let category = "";
  let categoryClass = "";
  if (result < 18.5) {
    category = "Kekurangan berat badan";
    categoryClass = "underweight";
  } else if (result < 25) {
    category = "Normal (ideal)";
    categoryClass = "normal";
  } else if (result < 30) {
    category = "Kelebihan berat badan";
    categoryClass = "overweight";
  } else {
    category = "Kegemukan (Obesitas)";
    categoryClass = "obese";
  }

  // Tampilkan category
  const information = document.getElementById("category");
  information.innerHTML = `Kondisi anda saat ini adalah <span class="${categoryClass}">${category}</span>`;
}

/* Fungsi reset hasil BMI */
document.querySelector(".reset").addEventListener("click", function () {
  document.getElementById("result-bmi").innerHTML = 0;
  const information = document.getElementById("category");
  information.innerHTML = "";
});
