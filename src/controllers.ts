import Holidays from "date-holidays";

export const homeCtrl = (req, res): void => {
  const holidays = new Holidays("FI").isHoliday(new Date());

  const pageContent: string = `
    ${JSON.stringify(holidays)}
  `;

  res.send(pageContent);
};
