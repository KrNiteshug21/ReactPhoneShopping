import "../index.css";

const Pagination = ({ phonePerPage, totalPhones, paginate }) => {
  const numbers = [];
  for (let i = 1; i <= Math.ceil(totalPhones / phonePerPage); i++) {
    numbers.push(i);
  }
  return (
    <section className="paginationContainer">
      <div className="paginationHeading">
        <h2>Pages</h2>
      </div>
      <div className="paginatinBtnContainer">
        {numbers.map((number) => {
          return (
            <button
              key={number}
              className="pageBtn"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Pagination;
