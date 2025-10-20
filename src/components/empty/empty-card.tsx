'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function EmptyCard() {
  const route = useRouter();
  return (
    <div className="w-full min-h-[50vh] md:min-h-[60vh] grid place-items-center">
      <Card className="max-w-sm w-full text-center">
        <CardHeader>
          <CardTitle>List is empty</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => route.push('/movie')}>Go to Movie</Button>
        </CardContent>
      </Card>
    </div>
  );
}
