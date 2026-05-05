function Home() {
  return (
    <div>
      <h1>Пампорово зимен сезон</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <p>
          Курортен комплекс Пампорово се намира в сърцето на Родопите,
          на 1650 м. надморска височина. Това е един от най-слънчевите
          зимни курорти в България.
        </p>

        <img
          src="/Photos/Pam.jpg"
          alt="pamporovo"
          width="400"
        />
      </div>

      <h2>Зимни активности</h2>

      <p>
        Освен ски и сноуборд, можете да карате шейни,
        моторни шейни и да се насладите на СПА центрове.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <img src="/Photos/ski school.jpg" width="300" />
        <img src="/Photos/motor sledge.jpg" width="300" />
      </div>

      <h2>Сезонни карти</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Тип</th>
            <th>Възрастен</th>
            <th>Младеж</th>
            <th>Дете</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Сезонна карта</td>
            <td>1650 лв.</td>
            <td>1399 лв.</td>
            <td>990 лв.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;