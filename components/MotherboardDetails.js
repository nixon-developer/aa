"use client"

import { useState, useEffect } from 'react';
import { Card, Spin, Alert } from 'antd';

function MotherboardDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/motherboard');
        if (!response.ok) {
          throw new Error('Failed to fetch motherboard details');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spin tip="Loading motherboard details..." />;
  if (error) return <Alert message="Error" description={error} type="error" showIcon />;

  return (
    <Card title="Motherboard Details" bordered={false} style={{ width: 300 }}>
      <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
      <p><strong>Model:</strong> {data.model}</p>
      <p><strong>Version:</strong> {data.version}</p>
      <p><strong>Serial Number:</strong> {data.serial}</p>
    </Card>
  );
}

export default MotherboardDetails;
