import { TrendCard } from "./TrendCard";

export const TrendList = ({ list, contentType }) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {list.map((item) => (
              <TrendCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
