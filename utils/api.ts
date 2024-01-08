const createURL = (path: any) => {
  return window.location.origin + path;
};

export const updateEntry = async (id: any, content: any) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      // since we already have a default entry, i.e. 'content: 'Write about your day!', we don't need to use body here
      // body: JSON.stringify({})
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
