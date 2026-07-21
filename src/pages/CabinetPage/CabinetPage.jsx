import "./CabinetPage.css";
import { useState, useEffect } from "react";

function CabinetPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cabinetData"));

    if (savedData) {
      setFirstName(savedData.firstName || "");
      setLastName(savedData.lastName || "");
      setPhone(savedData.phone || "");
      setCity(savedData.city || "");
      setDepartment(savedData.department || "");
    }
  }, []);

  const saveData = () => {
    localStorage.setItem(
      "cabinetData",
      JSON.stringify({
        firstName,
        lastName,
        phone,
        city,
        department,
      }),
    );
  };

  return (
    <div className="cabinet-page">
      <h1 className="cabinet-title">Кабінет</h1>

      <div className="cabinet-content">
        <section className="orders-section">
          <h2>Мої замовлення</h2>

          <div className="orders-list">
            <div className="order-row">
              <div className="order-date">
                <p className="order-text">15.03.2026</p>
                <p className="order-label">№123456</p>
              </div>

              <div className="order-sum">
                <p className="order-label">Сума:</p>
                <p className="order-text">450 грн</p>
              </div>

              <div className="order-status">
                <p className="order-label">Статус:</p>
                <p className="order-text">Виконано</p>
              </div>
            </div>

            <div className="order-row">
              <div className="order-date">
                <p className="order-text">15.03.2026</p>
                <p className="order-label">№123456</p>
              </div>

              <div className="order-sum">
                <p className="order-label">Сума:</p>
                <p className="order-text">450 грн</p>
              </div>

              <div className="order-status">
                <p className="order-label">Статус:</p>
                <p className="order-text">Виконано</p>
              </div>
            </div>

            <div className="order-row">
              <div className="order-date">
                <p className="order-text">15.03.2026</p>
                <p className="order-label">№123456</p>
              </div>

              <div className="order-sum">
                <p className="order-label">Сума:</p>
                <p className="order-text">450 грн</p>
              </div>

              <div className="order-status">
                <p className="order-label">Статус:</p>
                <p className="order-text">Виконано</p>
              </div>
            </div>

            <div className="order-row">
              <div className="order-date">
                <p className="order-text">15.03.2026</p>
                <p className="order-label">№123456</p>
              </div>

              <div className="order-sum">
                <p className="order-label">Сума:</p>
                <p className="order-text">450 грн</p>
              </div>

              <div className="order-status">
                <p className="order-label">Статус:</p>
                <p className="order-text">Виконано</p>
              </div>
            </div>

            <div className="order-row">
              <div className="order-date">
                <p className="order-text">15.03.2026</p>
                <p className="order-label">№123456</p>
              </div>

              <div className="order-sum">
                <p className="order-label">Сума:</p>
                <p className="order-text">450 грн</p>
              </div>

              <div className="order-status">
                <p className="order-label">Статус:</p>
                <p className="order-text">Виконано</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Особиста інформація</h2>

          <div className="info-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-text">Ім'я*</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Ваше ім'я"
                />
              </div>

              <div className="form-group">
                <label className="form-text">Прізвище*</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Ваше прізвище"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label className="form-text">Номер телефону*</label>
              <input
                type="email"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+ 38 (0_) ___-__-__"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-text">Місто доставки*</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ваше місто"
                />
              </div>

              <div className="form-group">
                <label className="form-text">
                  Номер відділення Нової Пошти*
                </label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="1"
                />
              </div>
            </div>
          </div>
          <button className="save-btn" onClick={saveData}>
            Зберегти зміни
          </button>
        </section>
      </div>
      <div className="logout-container">
        <button className="logout-btn">Вийти з кабінету</button>
      </div>
    </div>
  );
}

export default CabinetPage;
