import React from 'react'
import { Image, List, Placeholder } from 'semantic-ui-react'

const ContactsListUI = ({
    state: {
        contacts: { loading, error, data }
    }
}) => {
    return (
        <div>
            {loading && (
                <>
                    <Placeholder>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                </>
            )}
            <List divided verticalAlign='middle'>
            {data?.length && data.map((contact, index) => (
                <List.Item key={index}>
                    <Image src="https://www.gravatar.com/avatar/HASH?s=40" title="Avatar" />
                    <List.Content>
                        <List.Header as='a'>{contact.name}</List.Header>
                    </List.Content>
                </List.Item>
            ))}
            </List>
        </div>
    )
}

export default ContactsListUI;
