import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const UseSelectMonedas = (label, opciones) => {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select name="" id="">
        <option value="">Selecciones</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  return [SelectMonedas];
};

export default UseSelectMonedas;
