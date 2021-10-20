import React from "react"
import { connect } from "react-redux"
import { apiActions } from "../../redux/actions/apiActions"
import ResponsiveTable from "../ResponsiveTable/ResponsiveTable"
import SearchBar from "../SearchBar/SearchBar"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { country: "United States" }
  }
  componentDidMount() {
    /* Pass a country name here as an argument to get back a list of universities in the county*/
    this.props.loadUniversities(this.state.country)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.country !== prevState.country) {
      this.props.loadUniversities(this.state.country)
    }
  }

  /* Please define the internal structure for the Responsive Table Component */
  renderTable() {
    let { universities } = this.props
    return universities.length ? (
      <ResponsiveTable
        headings={[
          { title: "Name", value: "name" },
          { title: "Website(s)", value: "websites" },
        ]}
        rows={universities.map((item) => {
          return {
            name: item.name,
            websites: item.web_pages ? item.web_pages.join(",") : "",
          }
        })}
      />
    ) : (
      <p>Loading...</p>
    )
  }
  renderSearchBar = () => {
    const setCountry = (val) => {
      this.setState({ ...this.state, country: val })
    }
    return (
      <SearchBar
        name="country"
        setValue={setCountry}
        initialValue={this.state.country}
      ></SearchBar>
    )
  }
  render() {
    return (
      <div>
        {this.renderSearchBar()}
        {this.renderTable()}
      </div>
    )
  }
}
function mapState(state) {
  const { universities } = state.api
  return { universities }
}

const actionCreators = {
  loadUniversities: apiActions.getUniversities,
}

export default connect(mapState, actionCreators)(Main)
