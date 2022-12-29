export const ServiceCard = ({ title, description, image, url }) => {
  return (
    <section>
      {url ? (
        <a href={url}>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={image} alt={title} />
        </a>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={image} alt={title} />
        </>
      )}
    </section>
  );
};

//HOC
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export const ComposedServiceCard = ({ title, description, image, url }) => {
  return (
    <section>
      <ConditionalWrapper
        condition={url}
        wrapper={(children) => <a href={url}>{children}</a>}
      >
        <>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={image} alt={title} />
        </>
      </ConditionalWrapper>
    </section>
  );
};

const ConditionalWrapper2 = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
};

const Card = ({ title, description, image, url }) => {
  const linkWrapper = (children) => <a href={url}>{children}</a>;

  return (
    <ConditionalWrapper2 condition={url} wrapper={linkWrapper}>
      <div>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <h4>{description}</h4>
      </div>
    </ConditionalWrapper2>
  );
};
