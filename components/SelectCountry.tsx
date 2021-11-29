export function SelectCountry() {
  return (
    <div>
      <label htmlFor="select">Select Country: </label>
      <select id="select" name="select" disabled={true}>
        <option>USA</option>
      </select>
    </div>
  );
}
