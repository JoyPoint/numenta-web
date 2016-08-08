import React from 'react'

import {scrollTo} from '../../utils/client/sections'

import MainSections from '../_MainSections'
import SectionOpensource from './_Section'
import Section from '../../components/Section'

const Default = (<SectionOpensource />)


/**
 *
 */
class OpenSourcePage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Open Source Project">
        {Default}
      </Section>
    ),
  }

  componentDidMount() {
    this.setState({  // eslint-disable-line react/no-did-mount-set-state
      sections: (<MainSections current={Default} />),
    })
  }

  componentDidUpdate() {
    scrollTo(Default)
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return sections
  }

}

export default OpenSourcePage