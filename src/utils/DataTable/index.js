/* eslint-disable consistent-return */
export const customStyles = {
  rows: {
    style: {
      minHeight: '81px',
      paddingTop: '10px', // override the row height
      paddingBottom: '10px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '21px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

export const DATATABLE = {
  customer: ((onDetail, onDelete) => [
    {
      name: ('Id'),
      selector: row => row.id,
      center: true,
      sortable: true,
    },
    {
      name: ('Name'),
      selector: row => row.name,
      center: true,
      sortable: true,
    },
    {
      name: ('Username'),
      selector: row => row.username,
      center: true,
      sortable: true,
    },
    {
      name: ('Email'),
      selector: row => row.email,
      center: true,
      sortable: true,
    },
    {
      name: ('City'),
      selector: row => row.city,
      center: true,
      sortable: true,
      cell: d => {
        if (d.address) {
          return (
            <span className="pb-1 font-12">
              {d.address.city}
            </span>
          );
        }
      },
    },
    {
      name: ('Edit'),
      selector: row => row.edit,
      center: true,
      sortable: true,
      cell: d => (
        <span className="text-nowrap">
          <button
            type="button"
            className="btn btn-warning btn-sm waves-effect waves-light text-white px-4 py-1"
            onClick={() => onDetail(d.id)}
          >
            Edit
          </button>
        </span>
      ),
    },
    {
      name: ('Delete'),
      selector: row => row.delete,
      center: true,
      sortable: true,
      cell: d => (
        <span className="text-nowrap">
          <button
            type="button"
            className="btn btn-danger btn-sm waves-effect waves-light px-3 py-1"
            title="Delete"
            onClick={() => onDelete(d.id)}
          >
            Delete
          </button>
        </span>
      ),
    },

  ]),
};
