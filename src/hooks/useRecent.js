function useRecent(data) {
    let loading = true;
    if (data) {
      loading = false;
      const recent = data.allContentfulBlog.edges[0].node.post.childrenMarkdownRemark[0].frontmatter;
      return [recent,loading]
    }
}

export default useRecent