import "./search-box.styles.scss";
import { useState } from "react";
import FilteredCountry from "../filtered-country/filtered-country.component";
import { Form, Row, Col, Card } from "react-bootstrap";

const SearchBox = () => {
  const [searchFields, setSearchFields] = useState("");

  const searchHandler = (event) => {
    const { value } = event.target;
    setSearchFields(value);
  };

  return (
    <div className="main-container">
      <Card className="mt-5">
        <Card.Body>
          <Card.Title className="mb-4">Weather forecast app</Card.Title>
          <Form.Group as={Row} className="mb-3">
            <Form.Label>Choose/Type your City</Form.Label>
            <Col sm="6">
              <Form.Control
                onChange={searchHandler}
                type="search"
                value={searchFields}
              />
            </Col>
          </Form.Group>
          <FilteredCountry searchFields={searchFields} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchBox;
