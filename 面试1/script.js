// 获取元素
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const toast = document.getElementById("toast");

// 切换登录 / 注册
loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  clearErrors();
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  clearErrors();
});

// 显示 Toast
function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.className = "toast";
  }, 2000);
}

// 清空所有错误提示
function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => {
    el.textContent = "";
  });
}

// 设置错误提示
function setError(id, message) {
  document.getElementById(id).textContent = message;
}

// 登录表单提交
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const account = document.getElementById("loginAccount").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  let isValid = true;

  if (account === "") {
    setError("loginAccountError", "账号不能为空");
    isValid = false;
  }

  if (password === "") {
    setError("loginPasswordError", "密码不能为空");
    isValid = false;
  }

  if (!isValid) {
    showToast("请检查输入内容", "error");
    return;
  }

  // 这里只是模拟登录成功
  showToast("登录成功！", "success");
  loginForm.reset();
});

// 注册表单提交
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const account = document.getElementById("registerAccount").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  let isValid = true;

  if (account === "") {
    setError("registerAccountError", "账号不能为空");
    isValid = false;
  }

  if (password === "") {
    setError("registerPasswordError", "密码不能为空");
    isValid = false;
  }

  if (confirmPassword === "") {
    setError("confirmPasswordError", "请再次输入密码");
    isValid = false;
  } else if (password !== confirmPassword) {
    setError("confirmPasswordError", "两次密码不一致");
    isValid = false;
  }

  if (!isValid) {
    showToast("注册失败，请检查输入", "error");
    return;
  }

  // 这里只是模拟注册成功
  showToast("注册成功！", "success");
  registerForm.reset();
});