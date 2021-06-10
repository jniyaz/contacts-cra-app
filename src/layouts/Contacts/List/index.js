import React from 'react';
import ImageThumb from '../../../components/ImageThumb';
import { Button, Header, Icon, Menu, Message, Placeholder, Table } from 'semantic-ui-react';
import Favourites from '../Favourites';

const ContactsListUI = ({ state: { contacts: { loading, data, isSearchActive, searchedContacts } }, deleteContact, favouriteContact }) => {
    const favourites = () => {
        return currentContacts && currentContacts.filter((item) => item.is_favourite);
    }

    const currentContacts = isSearchActive ? searchedContacts : data;

    return (
        <div>
            {/* Favourites */}
            <Header>Favourites</Header>
            <Favourites favorites={favourites()} loading={loading} />
            {/* All */}
            <Header>All Contacts</Header>
            {(loading) && (
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

            { !loading && currentContacts?.length === 0 && <Message
                content="No Contacts found."
            />}

            { currentContacts?.length > 0 && (
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
                        {currentContacts?.length && currentContacts.map((contact, index) => (
                            <Table.Row key={index} disabled={contact.deleting}>
                                <Table.Cell>
                                    <ImageThumb
                                        firstName={contact.first_name}
                                        lastName={contact.last_name}
                                        src={contact.avatar}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    {contact.first_name} {contact.last_name}
                                    {contact.is_favourite && <Icon name="heart" size="small" color="red" style={{ paddingLeft: '3px' }} />}    
                                </Table.Cell>
                                <Table.Cell>{contact.country_code}-{contact.phone_number}</Table.Cell>
                                <Table.Cell>{contact.country_code}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {contact.is_favourite 
                                        ? <Button size='mini' basic color='red' onClick={() => favouriteContact(contact.id, contact.is_favourite)}><Icon name="star" /></Button> 
                                        : <Button size='mini' basic onClick={() => favouriteContact(contact.id, contact.is_favourite)}><Icon name="star" /></Button>
                                    }
                                    <Button size='mini' basic color='blue'>
                                        <Icon name="edit" />
                                    </Button>
                                    <Button size='mini' basic color='red' onClick={() => deleteContact(contact.id)}>
                                        <Icon name="trash" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    {/* { currentContacts?.length > 5 &&
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
                    } */}
                </Table>
            )}
        </div>
    )
}

export default ContactsListUI;
