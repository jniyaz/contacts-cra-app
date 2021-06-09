import React from 'react'
import { Button, Icon, Image, List, Menu, Placeholder, Table } from 'semantic-ui-react'

const ContactsListUI = ({
    state: {
        contacts: { loading, error, data }
    }
}) => {
    console.log(data);
    return (
        <div>
            {(loading || !data?.length) && (
                <>
                    <Placeholder fluid>
                        <Placeholder.Header>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </>
            )}
            
            {!loading && data?.length && (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Avatar</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Phone Number</Table.HeaderCell>
                            <Table.HeaderCell>Country Code</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data?.length && data.map((contact, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>
                                    {contact.avatar 
                                        ? <Image width="48" src={contact.avatar} title="Avatar" /> 
                                        : <Image circular src="https://www.gravatar.com/avatar/HASH?s=40" title="Avatar" />
                                    }
                                </Table.Cell>
                                <Table.Cell>{contact.first_name} {contact.last_name}</Table.Cell>
                                <Table.Cell>{contact.phone_number}</Table.Cell>
                                <Table.Cell>{contact.country_code}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <Button size='mini' basic color='blue'>Edit</Button>
                                    <Button size='mini' basic color='red'>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            )}
        </div>
    )
}

export default ContactsListUI;
