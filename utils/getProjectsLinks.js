export const getProjectsLinks = (projects, projectStatuses) => {
  const newArr = [];
  
  projectStatuses.map((status) => {
    const links = [];
    projects.map((project) => {
      if (status === project.attributes.status) {
        links.push({
          title: project.attributes.title,
          slug: project.attributes.slug,
        });
      }
    });
    newArr.push({ status: status, links: links });
  });
  
  return newArr;
};