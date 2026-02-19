import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function TestFiduciery() {
  return (
    <div>
      <div
        className="flex items-center w-full mb-4 py-2 px-6 rounded"
        style={{
          backgroundColor: "var(--color-feedback-info-background-light)",
        }}
      >
        <FontAwesomeIcon
          size="sm"
          icon={faInfoCircle}
          className="mr-6 text-[var(--color-feedback-info-text)]"
          style={{ fontSize: "var(--font-sizes-md, 14px)" }}
        />

 
        <ul className="text-sm list-disc list-outside">
          <li>
            We save the financial data of your bexio clients overnight and then
            import it into the Cockpit. You will see the date of the last
            booking included in the calculation for each KPI.
          </li>
          <li>
            Deviations from the standard chart of accounts for SMEs can lead to
            incorrect KPI calculations. Please refer to the detailed calculation
            bases of the KPIs.
          </li>
        </ul>
      </div>


      <br />
      <br />

       <div
          className="flex items-center w-full mb-4 py-2 px-6 rounded 
          bg-[var(--color-feedback-info-background-light)]"
          style={{ borderRadius: 'var(--border-radius-sm)' }}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="mr-6 text-[var(--color-feedback-info-text)]"
            style={{ fontSize: 'var(--font-sizes-md)' }}
          />
          <ul className="text-sm list-disc list-outside">
            <li>
            We save the financial data of your bexio clients overnight and then
            import it into the Cockpit. You will see the date of the last
            booking included in the calculation for each KPI.
          </li>
          <li>
            Deviations from the standard chart of accounts for SMEs can lead to
            incorrect KPI calculations. Please refer to the detailed calculation
            bases of the KPIs.
          </li>
          </ul>
        </div>
    </div>
  );
}
