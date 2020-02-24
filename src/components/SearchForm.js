import React from "react";
import styled from 'styled-components';

const StyledForm = styled.div`
	form {
		width: 100%;
		display: flex;
	}
	.col {
		padding-right: 15px;
	}
	label {
		display: block;
    font-weight: bold;
	}
	input {
		width: 100%;
		margin-bottom: 10px;
	}
`;

export default function SearchForm(props) {
  const { search, setSearch } = props
  const handleChange = e => {
      setSearch({ ...search, [e.target.id]: e.target.value});
  }
  return (
          <section className="search-form">
            <StyledForm>
            <form onSubmit={e => e.preventDefault()}>
              <label htmlFor="search">Search: </label>
              <input
                id="search"
                name="search"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search Character"
              />
            </form>
            </StyledForm>
          </section>
  );
}

