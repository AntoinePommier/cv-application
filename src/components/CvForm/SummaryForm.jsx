import { FaChevronDown } from 'react-icons/fa6';

function SummaryForm({ cvData, updateSummary, open, onToggle }) {
  return (
    <div className="form-container">
      <button onClick={onToggle}>
        <span className="button-title">Summary</span>
        <span className={`chevron ${open ? "open" : ""}`}><FaChevronDown size={15} /></span>
      </button>
      <div className={`form-wrapper ${open ? "open" : ""}`}>
        <form className="summary-form">
          <div className="input-div">
            <label htmlFor="summary">About you</label>
            <textarea id="summary" placeholder="Short professional summary" value={cvData.summary} maxLength={400} onChange={(e) => updateSummary(e.target.value)} />
            <p className="char-count">
              {cvData.summary.length} / 400
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SummaryForm