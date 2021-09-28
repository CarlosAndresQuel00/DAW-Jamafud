import React, { useState } from "react";
import styles from "../styles/SeeMenu.module.css";
import { Modal, Button } from "antd";

export default function SeeMenu() {
  const [day, setDay] = useState("1");

  const handleChange = (event) => {
    console.log(event.target.value);
    setDay(event.target.value);
    //console.log(day)
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <h1 className={styles.centerText}>Planificación de tu comida semanal</h1>
      <div className={styles.block}>
        <div className={styles.block1}>
          <h2 className={styles.centerText}>Tu Menú</h2>
          <div className={styles.selector}>
            <label htmlFor="dayselection" style={{ marginRight: "10px" }}>
              Día{" "}
            </label>
            <select
              name="dayselection"
              onChange={handleChange}
              className={styles.selectorBox}
            >
              <option value="1"> Lunes </option>
              <option value="2">Martes</option>
              <option value="3">Miércoles</option>
              <option value="4">Jueves</option>
              <option value="5">Viernes</option>
              <option value="6">Sábado</option>
              <option value="7">Domingo</option>
            </select>
          </div>

          <div className={styles.block2}>
            <div className={styles.menuBox}>
              <img
                src=""
                width="100%"
                height="200px"
                style={{ margin: "0 auto" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <h3>Desayuno</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <button className={styles.btnMeal} onClick={showModal}>
                    Ver Receta
                  </button>
                  <button className={styles.btnMeal}>Cambiar</button>
                </div>
              </div>
              <Modal
                title="Arroz con huevo"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <h3>Ingredientes</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      margin: "5px",
                      padding: "5px",
                      backgroundColor: "#FB93FF",
                      borderRadius: "10px",
                    }}
                  >
                    <p>comino yuca verde</p>
                  </div>
                  <div style={{ width: "50%", borderRadius: "10px" }}>
                    <img
                      src=""
                      width="100%"
                      height="200px"
                      style={{ margin: "0 auto" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "50%", margin: "5px", padding: "5px" }}>
                    <h3>Preparación</h3>
                    <button className={styles.btnMeal} onClick={handleCancel} >Regresar</button>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      margin: "5px",
                      padding: "5px",
                      backgroundColor: "#FB93FF",
                      borderRadius: "10px",
                    }}
                  >
                    <p>Descripcion de la preparacion</p>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className={styles.block1}>
          <h2 className={styles.centerText}>Tu Presupuesto</h2>
          <div className={styles.block2}>
            <h3 className={styles.centerText}>
              Comprar los siguientes ingredientes
            </h3>
            <div className={styles.ingredientsBox}></div>
            <button className={styles.btnPrint}>Imprimir</button>
          </div>
        </div>
      </div>
    </div>
  );
}
