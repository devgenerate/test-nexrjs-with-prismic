/**
 * @typedef {import("@prismicio/client").Content.Test1Slice} Test1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Test1Slice>} Test1Props
 * @param {Test1Props}
 */
const Test1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test1 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Test1;
