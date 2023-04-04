import { TornadoWarningPolygon } from "./TornadoWarningPolygon";

export const TornadoWarningPolygons = ({ alertsObj, colorHex }) => {
  return (
    <g>
      {alertsObj.features.map((feature, index) => (
        <TornadoWarningPolygon
          key={index}
          feature={feature}
          colorHex={colorHex}
        />
      ))}
    </g>
  );
};