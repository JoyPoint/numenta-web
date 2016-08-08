import React from 'react'

import MainSections from './_MainSections'
import SectionIndex from './_Section'
import Section from '../components/Section'

import styles from './index.css'

const Default = (<SectionIndex />)


/**
 *
 */
class HomePage extends React.Component {

  state = {
    sections: (
      <Section
        headline={true}
        open={true}
        title="Leading the New Era of Machine Intelligence"
      >
        {Default}
      </Section>
    ),
  }

  componentDidMount() {
    this.setState({  // eslint-disable-line react/no-did-mount-set-state
      sections: (<MainSections current={Default} />),
    })
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return (
      <div className={styles.page}>
        {sections}
      </div>
    )
  }

}

export default HomePage