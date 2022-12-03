// src/articles/entities/article.entity.ts
// src/articles/entities/article.entity.ts

import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
