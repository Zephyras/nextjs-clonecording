import { Button, Divider, Form, Header, List, TextArea } from "semantic-ui-react"
export default function About() {
  return (
    <>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사소개
      </Header>

      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Sementic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item
          icon='mail'
          content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
        />
        <List.Item 
        icon="linkify" 
        content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>} />
      
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의 사항
      </Header>
      <Divider />
      <Form>
        <Form.Field>
          <label>제목</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>내용</label>
          <TextArea />
        </Form.Field>
        <Button style={{ marginBottom: 20 }} color="green">보내기</Button>
      </Form>
    </>
  )
}