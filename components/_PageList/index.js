import React, { Component } from 'react'
import ActionCard from '../ActionCard'
import Link from 'next/link'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

class PageList extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    {this.props.items.map((c, i)=>{
                        return <Col xs={12} sm={6} md={4} style={{ padding: 8 }} key={i}>
                            <Link href={`/docs/${this.props.id}/${c.fname}`}>
                                <ActionCard title={c.name} style={{ height: "100%" }}>
                                    <span>
                                        {c.description}
                                    </span>
                                </ActionCard>
                            </Link>
                        </Col>
                    })}
                </Row>
            </Grid>
        )
    }
}

export default PageList