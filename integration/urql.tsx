import gql from 'graphql-tag';
import * as React from 'react';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Domain = {
  __typename?: 'Domain';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  host: Scalars['String'];
  reactions?: Maybe<Array<Maybe<Reaction>>>;
};


export type DomainReactionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type DomainConnection = {
  __typename?: 'DomainConnection';
  values?: Maybe<Array<Maybe<Domain>>>;
  groupBy?: Maybe<DomainGroupBy>;
  aggregate?: Maybe<DomainAggregator>;
};

export type DomainAggregator = {
  __typename?: 'DomainAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DomainGroupBy = {
  __typename?: 'DomainGroupBy';
  id?: Maybe<Array<Maybe<DomainConnectionId>>>;
  created_at?: Maybe<Array<Maybe<DomainConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<DomainConnectionUpdated_At>>>;
  host?: Maybe<Array<Maybe<DomainConnectionHost>>>;
};

export type DomainConnectionId = {
  __typename?: 'DomainConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DomainConnection>;
};

export type DomainConnectionCreated_At = {
  __typename?: 'DomainConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DomainConnection>;
};

export type DomainConnectionUpdated_At = {
  __typename?: 'DomainConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DomainConnection>;
};

export type DomainConnectionHost = {
  __typename?: 'DomainConnectionHost';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DomainConnection>;
};

export type DomainInput = {
  host: Scalars['String'];
  reactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDomainInput = {
  host?: Maybe<Scalars['String']>;
  reactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateDomainInput = {
  data?: Maybe<DomainInput>;
};

export type CreateDomainPayload = {
  __typename?: 'createDomainPayload';
  domain?: Maybe<Domain>;
};

export type UpdateDomainInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDomainInput>;
};

export type UpdateDomainPayload = {
  __typename?: 'updateDomainPayload';
  domain?: Maybe<Domain>;
};

export type DeleteDomainInput = {
  where?: Maybe<InputId>;
};

export type DeleteDomainPayload = {
  __typename?: 'deleteDomainPayload';
  domain?: Maybe<Domain>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  owner?: Maybe<UsersPermissionsUser>;
  name: Scalars['String'];
  promotes?: Maybe<Array<Maybe<Reaction>>>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
};


export type ProfilePromotesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ProfileReactionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  values?: Maybe<Array<Maybe<Profile>>>;
  groupBy?: Maybe<ProfileGroupBy>;
  aggregate?: Maybe<ProfileAggregator>;
};

export type ProfileAggregator = {
  __typename?: 'ProfileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProfileGroupBy = {
  __typename?: 'ProfileGroupBy';
  id?: Maybe<Array<Maybe<ProfileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProfileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProfileConnectionUpdated_At>>>;
  owner?: Maybe<Array<Maybe<ProfileConnectionOwner>>>;
  name?: Maybe<Array<Maybe<ProfileConnectionName>>>;
};

export type ProfileConnectionId = {
  __typename?: 'ProfileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionCreated_At = {
  __typename?: 'ProfileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionUpdated_At = {
  __typename?: 'ProfileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionOwner = {
  __typename?: 'ProfileConnectionOwner';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileConnectionName = {
  __typename?: 'ProfileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProfileConnection>;
};

export type ProfileInput = {
  owner?: Maybe<Scalars['ID']>;
  promotes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  reactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProfileInput = {
  owner?: Maybe<Scalars['ID']>;
  promotes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  reactions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProfileInput = {
  data?: Maybe<ProfileInput>;
};

export type CreateProfilePayload = {
  __typename?: 'createProfilePayload';
  profile?: Maybe<Profile>;
};

export type UpdateProfileInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProfileInput>;
};

export type UpdateProfilePayload = {
  __typename?: 'updateProfilePayload';
  profile?: Maybe<Profile>;
};

export type DeleteProfileInput = {
  where?: Maybe<InputId>;
};

export type DeleteProfilePayload = {
  __typename?: 'deleteProfilePayload';
  profile?: Maybe<Profile>;
};

export type Reaction = {
  __typename?: 'Reaction';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  body: Scalars['String'];
  date: Scalars['DateTime'];
  score: Scalars['Float'];
  votes?: Maybe<Array<Maybe<ComponentManifestVote>>>;
  creator?: Maybe<Profile>;
  domain?: Maybe<Domain>;
  promoters?: Maybe<Array<Maybe<Profile>>>;
};


export type ReactionPromotersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ReactionConnection = {
  __typename?: 'ReactionConnection';
  values?: Maybe<Array<Maybe<Reaction>>>;
  groupBy?: Maybe<ReactionGroupBy>;
  aggregate?: Maybe<ReactionAggregator>;
};

export type ReactionAggregator = {
  __typename?: 'ReactionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ReactionAggregatorSum>;
  avg?: Maybe<ReactionAggregatorAvg>;
  min?: Maybe<ReactionAggregatorMin>;
  max?: Maybe<ReactionAggregatorMax>;
};

export type ReactionAggregatorSum = {
  __typename?: 'ReactionAggregatorSum';
  score?: Maybe<Scalars['Float']>;
};

export type ReactionAggregatorAvg = {
  __typename?: 'ReactionAggregatorAvg';
  score?: Maybe<Scalars['Float']>;
};

export type ReactionAggregatorMin = {
  __typename?: 'ReactionAggregatorMin';
  score?: Maybe<Scalars['Float']>;
};

export type ReactionAggregatorMax = {
  __typename?: 'ReactionAggregatorMax';
  score?: Maybe<Scalars['Float']>;
};

export type ReactionGroupBy = {
  __typename?: 'ReactionGroupBy';
  id?: Maybe<Array<Maybe<ReactionConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ReactionConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ReactionConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ReactionConnectionTitle>>>;
  body?: Maybe<Array<Maybe<ReactionConnectionBody>>>;
  date?: Maybe<Array<Maybe<ReactionConnectionDate>>>;
  score?: Maybe<Array<Maybe<ReactionConnectionScore>>>;
  creator?: Maybe<Array<Maybe<ReactionConnectionCreator>>>;
  domain?: Maybe<Array<Maybe<ReactionConnectionDomain>>>;
};

export type ReactionConnectionId = {
  __typename?: 'ReactionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionCreated_At = {
  __typename?: 'ReactionConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionUpdated_At = {
  __typename?: 'ReactionConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionTitle = {
  __typename?: 'ReactionConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionBody = {
  __typename?: 'ReactionConnectionBody';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionDate = {
  __typename?: 'ReactionConnectionDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionScore = {
  __typename?: 'ReactionConnectionScore';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionCreator = {
  __typename?: 'ReactionConnectionCreator';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionConnectionDomain = {
  __typename?: 'ReactionConnectionDomain';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReactionConnection>;
};

export type ReactionInput = {
  title: Scalars['String'];
  body: Scalars['String'];
  date: Scalars['DateTime'];
  score: Scalars['Float'];
  votes?: Maybe<Array<Maybe<ComponentManifestVoteInput>>>;
  creator?: Maybe<Scalars['ID']>;
  promoters?: Maybe<Array<Maybe<Scalars['ID']>>>;
  domain?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditReactionInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  score?: Maybe<Scalars['Float']>;
  votes?: Maybe<Array<Maybe<EditComponentManifestVoteInput>>>;
  creator?: Maybe<Scalars['ID']>;
  promoters?: Maybe<Array<Maybe<Scalars['ID']>>>;
  domain?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateReactionInput = {
  data?: Maybe<ReactionInput>;
};

export type CreateReactionPayload = {
  __typename?: 'createReactionPayload';
  reaction?: Maybe<Reaction>;
};

export type UpdateReactionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditReactionInput>;
};

export type UpdateReactionPayload = {
  __typename?: 'updateReactionPayload';
  reaction?: Maybe<Reaction>;
};

export type DeleteReactionInput = {
  where?: Maybe<InputId>;
};

export type DeleteReactionPayload = {
  __typename?: 'deleteReactionPayload';
  reaction?: Maybe<Reaction>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentManifestVote = {
  __typename?: 'ComponentManifestVote';
  id: Scalars['ID'];
  voter?: Maybe<Profile>;
  vote: Scalars['Boolean'];
  when: Scalars['DateTime'];
};

export type ComponentManifestVoteInput = {
  voter?: Maybe<Scalars['ID']>;
  vote: Scalars['Boolean'];
  when: Scalars['DateTime'];
};

export type EditComponentManifestVoteInput = {
  id?: Maybe<Scalars['ID']>;
  voter?: Maybe<Scalars['ID']>;
  vote?: Maybe<Scalars['Boolean']>;
  when?: Maybe<Scalars['DateTime']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Domain | DomainConnection | DomainAggregator | DomainGroupBy | DomainConnectionId | DomainConnectionCreated_At | DomainConnectionUpdated_At | DomainConnectionHost | CreateDomainPayload | UpdateDomainPayload | DeleteDomainPayload | Profile | ProfileConnection | ProfileAggregator | ProfileGroupBy | ProfileConnectionId | ProfileConnectionCreated_At | ProfileConnectionUpdated_At | ProfileConnectionOwner | ProfileConnectionName | CreateProfilePayload | UpdateProfilePayload | DeleteProfilePayload | Reaction | ReactionConnection | ReactionAggregator | ReactionAggregatorSum | ReactionAggregatorAvg | ReactionAggregatorMin | ReactionAggregatorMax | ReactionGroupBy | ReactionConnectionId | ReactionConnectionCreated_At | ReactionConnectionUpdated_At | ReactionConnectionTitle | ReactionConnectionBody | ReactionConnectionDate | ReactionConnectionScore | ReactionConnectionCreator | ReactionConnectionDomain | CreateReactionPayload | UpdateReactionPayload | DeleteReactionPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentManifestVote;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  domain?: Maybe<Domain>;
  domains?: Maybe<Array<Maybe<Domain>>>;
  domainsConnection?: Maybe<DomainConnection>;
  profile?: Maybe<Profile>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  profilesConnection?: Maybe<ProfileConnection>;
  reaction?: Maybe<Reaction>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  reactionsConnection?: Maybe<ReactionConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryDomainArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDomainsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDomainsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProfilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryReactionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryReactionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryReactionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDomain?: Maybe<CreateDomainPayload>;
  updateDomain?: Maybe<UpdateDomainPayload>;
  deleteDomain?: Maybe<DeleteDomainPayload>;
  createProfile?: Maybe<CreateProfilePayload>;
  updateProfile?: Maybe<UpdateProfilePayload>;
  deleteProfile?: Maybe<DeleteProfilePayload>;
  createReaction?: Maybe<CreateReactionPayload>;
  updateReaction?: Maybe<UpdateReactionPayload>;
  deleteReaction?: Maybe<DeleteReactionPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateDomainArgs = {
  input?: Maybe<CreateDomainInput>;
};


export type MutationUpdateDomainArgs = {
  input?: Maybe<UpdateDomainInput>;
};


export type MutationDeleteDomainArgs = {
  input?: Maybe<DeleteDomainInput>;
};


export type MutationCreateProfileArgs = {
  input?: Maybe<CreateProfileInput>;
};


export type MutationUpdateProfileArgs = {
  input?: Maybe<UpdateProfileInput>;
};


export type MutationDeleteProfileArgs = {
  input?: Maybe<DeleteProfileInput>;
};


export type MutationCreateReactionArgs = {
  input?: Maybe<CreateReactionInput>;
};


export type MutationUpdateReactionArgs = {
  input?: Maybe<UpdateReactionInput>;
};


export type MutationDeleteReactionArgs = {
  input?: Maybe<DeleteReactionInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id' | 'username' | 'email' | 'confirmed'>
      & { role?: Maybe<(
        { __typename?: 'UsersPermissionsMeRole' }
        & Pick<UsersPermissionsMeRole, 'id' | 'name' | 'type'>
      )> }
    ) }
  ) }
);

export type ProfileInitilizationMutationVariables = Exact<{
  userID: Scalars['ID'];
  name: Scalars['String'];
}>;


export type ProfileInitilizationMutation = (
  { __typename?: 'Mutation' }
  & { createProfile?: Maybe<(
    { __typename?: 'createProfilePayload' }
    & { profile?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'name'>
    )> }
  )> }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id' | 'username' | 'email' | 'confirmed'>
      & { role?: Maybe<(
        { __typename?: 'UsersPermissionsMeRole' }
        & Pick<UsersPermissionsMeRole, 'id' | 'name' | 'type'>
      )> }
    ) }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UsersPermissionsMe' }
    & Pick<UsersPermissionsMe, 'id' | 'username' | 'email' | 'confirmed'>
  )> }
);

export type PublicReactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicReactionsQuery = (
  { __typename?: 'Query' }
  & { reactions?: Maybe<Array<Maybe<(
    { __typename?: 'Reaction' }
    & Pick<Reaction, 'id' | 'title' | 'body' | 'score' | 'date'>
    & { votes?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentManifestVote' }
      & Pick<ComponentManifestVote, 'vote' | 'when'>
      & { voter?: Maybe<(
        { __typename?: 'Profile' }
        & Pick<Profile, 'id' | 'name'>
      )> }
    )>>>, creator?: Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'id'>
      & { owner?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'username'>
      )> }
    )>, promoters?: Maybe<Array<Maybe<(
      { __typename?: 'Profile' }
      & Pick<Profile, 'name'>
    )>>>, domain?: Maybe<(
      { __typename?: 'Domain' }
      & Pick<Domain, 'host'>
    )> }
  )>>> }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {identifier: $email, password: $password}) {
    jwt
    user {
      id
      username
      email
      confirmed
      role {
        id
        name
        type
      }
    }
  }
}
    `;

export const LoginComponent = (props: Omit<Urql.MutationProps<LoginMutation, LoginMutationVariables>, 'query'> & { variables?: LoginMutationVariables }) => (
  <Urql.Mutation {...props} query={LoginDocument} />
);


export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const ProfileInitilizationDocument = gql`
    mutation ProfileInitilization($userID: ID!, $name: String!) {
  createProfile(input: {data: {owner: $userID, name: $name}}) {
    profile {
      id
      name
    }
  }
}
    `;

export const ProfileInitilizationComponent = (props: Omit<Urql.MutationProps<ProfileInitilizationMutation, ProfileInitilizationMutationVariables>, 'query'> & { variables?: ProfileInitilizationMutationVariables }) => (
  <Urql.Mutation {...props} query={ProfileInitilizationDocument} />
);


export function useProfileInitilizationMutation() {
  return Urql.useMutation<ProfileInitilizationMutation, ProfileInitilizationMutationVariables>(ProfileInitilizationDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
  register(input: {username: $username, email: $email, password: $password}) {
    jwt
    user {
      id
      username
      email
      confirmed
      role {
        id
        name
        type
      }
    }
  }
}
    `;

export const RegisterComponent = (props: Omit<Urql.MutationProps<RegisterMutation, RegisterMutationVariables>, 'query'> & { variables?: RegisterMutationVariables }) => (
  <Urql.Mutation {...props} query={RegisterDocument} />
);


export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    confirmed
  }
}
    `;

export const MeComponent = (props: Omit<Urql.QueryProps<MeQuery, MeQueryVariables>, 'query'> & { variables?: MeQueryVariables }) => (
  <Urql.Query {...props} query={MeDocument} />
);


export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PublicReactionsDocument = gql`
    query PublicReactions {
  reactions(sort: "date") {
    id
    title
    body
    score
    date
    votes {
      voter {
        id
        name
      }
      vote
      when
    }
    creator {
      id
      owner {
        username
      }
    }
    promoters {
      name
    }
    domain {
      host
    }
  }
}
    `;

export const PublicReactionsComponent = (props: Omit<Urql.QueryProps<PublicReactionsQuery, PublicReactionsQueryVariables>, 'query'> & { variables?: PublicReactionsQueryVariables }) => (
  <Urql.Query {...props} query={PublicReactionsDocument} />
);


export function usePublicReactionsQuery(options: Omit<Urql.UseQueryArgs<PublicReactionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PublicReactionsQuery>({ query: PublicReactionsDocument, ...options });
};