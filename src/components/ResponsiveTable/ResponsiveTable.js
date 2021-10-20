import React from "react"
import "./ResponsiveTable.css"

export default function ResponsiveTable(props) {
  const { headings, rows } = props
  return (
    <div className="responsive-table-container">
      {
        <table>
          <thead>
            <tr className="responsive-table-row">
              {headings.map((heading) => {
                return (
                  <th
                    className="responsive-table-header"
                    key={heading.value}
                    id={heading.value}
                  >
                    {heading.title}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, id) => {
              return (
                <tr key={id} className="responsive-table-row">
                  {headings.map(({ value }) => {
                    return (
                      <td
                        headers={value}
                        key={value}
                        className="responsive-table-details"
                      >
                        <label>{value}</label> <span>{row[value]}</span>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </div>
  )
}
