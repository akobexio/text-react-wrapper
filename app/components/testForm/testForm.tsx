import BxButton from "../BxButton/BxButton";

export default function TestForm() {
  return (
    <div>
      <form
        id="processForm"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted");
        }}
        onReset={(e) => {
          alert("Form reset");
        }}
      >
        <input
          type="text"
          required
          name="sampleInput"
          placeholder="Type something..."
          style={{ margin: "1rem 0" }}
        />

        <div style={{ display: "flex", gap: "1rem" }}>
          <BxButton type="submit" variant="primary">
            Submit
          </BxButton>
          <BxButton type="reset" variant="secondary">
            Reset
          </BxButton>
        </div>
      </form>
      <BxButton
        type="submit"
        variant="primary"
        form="processForm"
        style={{ marginTop: "1rem" }}
      >
        Submit outside form
      </BxButton>
    </div>
  );
}
