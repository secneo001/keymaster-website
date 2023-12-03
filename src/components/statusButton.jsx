import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';

const StatusButton = ({ loading, error, children }) => {

  if (loading) {
    return (
      <Button disabled>
        <Spinner animation="border" role="status" aria-hidden="true" size="sm" as="span" className="me-2" />
        Loading...
      </Button>
    )
  }

  if (error) {
    return <Button disabled>{error}</Button>
  }

  return children
}

const StatusButtonDownload = ({ text = "Download stable", projectData, loading, error }) => {
  return (
    <StatusButton loading={loading} error={error}>
      <Button href={projectData.releases?.stable.assets[0].browser_download_url}><span><Download className="me-2" />{text} [{projectData.releases?.stable.tag_name}]</span></Button>
    </StatusButton>
  )
}

export { StatusButton, StatusButtonDownload };
